import React, { FC } from 'react';
import '#/styles/button-spinner.module.scss'; // Import any specific styles

interface ButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  color?: 'primary' | 'secondary' | 'danger'; // Define available colors
  variant?: 'filled' | 'outline' | 'text';
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  [key: string]: any; // For other possible props
}

const Button: FC<ButtonProps> = ({
  children = 'label',
  isLoading = false,
  color = 'primary', // Default color
  variant = 'filled',
  size = 'large',
  disabled = false,
  startIcon,
  endIcon,
  ...restProps
}) => {
  // Button size mapping
  const sizeClasses = {
    xlarge: 'h-16 text-lg',
    large: 'h-14 text-lg',
    medium: 'h-12 text-md',
    small: 'h-10 text-sm',
  };

  // Class based on variant
  const variantClasses = {
    filled: `bg-${color}-500 hover:bg-${color}-600 text-white`,
    outline: `border border-${color}-500 text-${color}-500 hover:bg-${color}-100`,
    text: `text-${color}-500 hover:bg-${color}-50`,
  };

  // Button class composition using template literals
  const buttonClass = `
    cursor-pointer rounded-md flex items-center justify-center transition-all
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  return (
    <button
      type="button"
      disabled={isLoading || disabled}
      className={buttonClass}
      {...restProps}
    >
      {isLoading && !startIcon && !endIcon && (
        <progress className="progress-circular w-6 h-6 mr-2" />
      )}
      {startIcon && !isLoading && (
        <span className={`flex mr-2 ${size === 'small' ? 'text-xs' : 'text-lg'}`}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && !isLoading && (
        <span className={`flex ml-2 ${size === 'small' ? 'text-xs' : 'text-lg'}`}>
          {endIcon}
        </span>
      )}
      {isLoading && endIcon && (
        <progress className="progress-circular w-6 h-6 ml-2" />
      )}
    </button>
  );
};

export default Button;
