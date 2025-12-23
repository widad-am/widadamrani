"use client";
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gradient: 'px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-purple-500',
    outline: 'px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-purple-500',
    ghost: 'px-6 py-3 text-purple-600 hover:bg-purple-50 hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-purple-500',
    glass: 'px-6 py-3 glass text-gray-800 hover:glass-strong hover:shadow-glow transform hover:-translate-y-0.5 focus:ring-purple-500',
    neon: 'px-6 py-3 bg-purple-600 text-white shadow-neon hover:shadow-glow-xl transform hover:-translate-y-0.5 focus:ring-purple-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const buttonContent = (
    <>
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="w-4 h-4 ml-2" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button; 