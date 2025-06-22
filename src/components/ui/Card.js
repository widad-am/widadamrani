"use client";
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({
  children,
  variant = 'glass',
  className = '',
  hover = true,
  padding = 'md',
  href,
  onClick,
  ...props
}, ref) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    glass: 'card',
    'glass-dark': 'card-dark',
    'glass-strong': 'glass-strong',
    'glass-strong-dark': 'glass-strong-dark',
    solid: 'bg-white shadow-lg hover:shadow-xl border border-gray-200',
    'solid-dark': 'bg-gray-800 shadow-lg hover:shadow-xl border border-gray-700 text-white',
    gradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-lg hover:shadow-xl',
    'gradient-dark': 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 shadow-lg hover:shadow-xl text-white',
    neon: 'bg-white shadow-neon hover:shadow-glow-xl border border-purple-200',
  };

  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const hoverClasses = hover ? 'hover-lift cursor-pointer' : '';
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddingSizes[padding]} ${hoverClasses} ${className}`;

  const cardContent = (
    <motion.div
      ref={ref}
      className={cardClasses}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="block"
        whileHover={hover ? { scale: 1.02 } : {}}
        whileTap={hover ? { scale: 0.98 } : {}}
      >
        {cardContent}
      </motion.a>
    );
  }

  return cardContent;
});

Card.displayName = 'Card';

// Card sub-components for better organization
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-semibold mb-2 ${className}`} {...props}>
    {children}
  </h3>
);

Card.Subtitle = ({ children, className = '', ...props }) => (
  <p className={`text-gray-600 text-sm ${className}`} {...props}>
    {children}
  </p>
);

Card.Content = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-6 pt-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '', ...props }) => (
  <div className={`mb-4 overflow-hidden rounded-lg ${className}`} {...props}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

export default Card; 