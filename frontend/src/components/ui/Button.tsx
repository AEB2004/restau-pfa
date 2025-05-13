import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = "rounded font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variant classes
  const variantClasses = {
    primary: "bg-[#7D0633] text-white hover:bg-[#A50844] focus:ring-[#7D0633]",
    secondary: "bg-[#D4AF37] text-neutral-900 hover:bg-[#E9C767] focus:ring-[#D4AF37]",
    outline: "border border-[#7D0633] text-[#7D0633] hover:bg-[#7D0633] hover:text-white focus:ring-[#7D0633]",
  };
  
  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  
  // Disabled classes
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer";
  
  // Full width class
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;