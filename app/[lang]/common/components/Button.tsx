'use client';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large'; // تعریف نوع برای اندازه‌ها
  color?: string;
  iconColor?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  [key: string]: any;
};

const Button = ({
  type = 'button',
  isLoading = false,
  disabled = false,
  size = 'medium',
  color = 'bg-primary-40',
  iconColor = 'text-white',
  startIcon,
  endIcon,
  children,
  ...restProps
}: ButtonProps) => {
  const sizeClass = {
    small: 'py-1 px-3 text-sm',
    medium:
      'py-[10px] px-6 font-[600] text-neutral-100 rounded-[8px] text-base',
    large: 'py-3 px-6 text-lg',
  };

  const buttonClass = `
    ${sizeClass[size]} 
    ${color} 
    flex 
    items-center 
    justify-center 
    transition-all 
    duration-300 
    ease-in-out 
    ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className={buttonClass}
      {...restProps}
    >
      {isLoading && !startIcon && !endIcon && (
        <progress className="progress-circular w-6 h-6 mr-2" />
      )}
      {startIcon && !isLoading && startIcon}
      {children}
      {endIcon && !isLoading && endIcon}
      {isLoading && endIcon && (
        <progress className="progress-circular w-6 h-6 ml-2" />
      )}
    </button>
  );
};

export default Button;
