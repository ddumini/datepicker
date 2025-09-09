import React from 'react';
import type { ButtonProps } from './types';

/**
 * 재사용 가능한 Button 컴포넌트
 * 다양한 variant를 지원하며 접근성을 고려한 설계
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  state = 'default',
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  size = 'medium',
  onClick,
  ...props
}) => {

  const baseClasses = 'w-full flex justify-center items-center rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 bg-transparent aspect-square border-none p-0';
  const sizeClasses = {
    small: 'w-10',
    medium: 'w-12',
    large: 'w-14',
  };
  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    // variantClasses[variant],
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};
