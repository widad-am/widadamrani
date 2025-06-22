"use client";
import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiSearch, FiMail, FiLock, FiUser } from 'react-icons/fi';

const Input = forwardRef(({
  type = 'text',
  variant = 'glass',
  size = 'md',
  className = '',
  label,
  placeholder,
  error,
  success,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = true,
  required = false,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses = 'w-full rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    glass: 'input-field',
    'glass-dark': 'w-full px-4 py-3 bg-black/10 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300',
    solid: 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300',
    'solid-dark': 'w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300',
    outline: 'w-full px-4 py-3 bg-transparent border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  // Determine input type
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  // Get icon based on type if not provided
  const getDefaultIcon = () => {
    if (Icon) return Icon;
    switch (type) {
      case 'email':
        return FiMail;
      case 'password':
        return FiLock;
      case 'search':
        return FiSearch;
      default:
        return FiUser;
    }
  };

  const DefaultIcon = getDefaultIcon();
  const hasIcon = DefaultIcon && type !== 'password';

  const inputClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} ${
    error ? 'border-red-500 focus:ring-red-500' : ''
  } ${
    success ? 'border-green-500 focus:ring-green-500' : ''
  }`;

  const containerClasses = `relative ${widthClass}`;

  return (
    <div className={containerClasses}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {hasIcon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <DefaultIcon className="w-5 h-5" />
          </div>
        )}
        
        <motion.input
          ref={ref}
          type={inputType}
          className={`${inputClasses} ${
            hasIcon && iconPosition === 'left' ? 'pl-10' : ''
          } ${
            hasIcon && iconPosition === 'right' ? 'pr-10' : ''
          } ${
            type === 'password' ? 'pr-10' : ''
          }`}
          placeholder={placeholder}
          disabled={disabled || loading}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {hasIcon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <DefaultIcon className="w-5 h-5" />
          </div>
        )}
        
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
          </button>
        )}
        
        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <motion.div
              className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
      
      {success && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-green-600"
        >
          {success}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 