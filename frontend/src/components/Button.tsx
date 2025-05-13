import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  isLoading = false,
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyle = 'btn';
  
  // Define variant classes (though we're not using them with our current CSS,
  // this structure allows for easy future expansion)
  const variantClass = variant === 'primary' 
    ? '' 
    : variant === 'secondary' 
      ? 'btn-secondary' 
      : 'btn-outline';
  
  return (
    <button 
      className={`${baseStyle} ${variantClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="loading-spinner">Loading...</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;