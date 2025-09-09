import React from 'react';
import type { ChevronArrowIconProps } from './types';

/**
 * Chevron Arrow 아이콘 컴포넌트
 * 
 * @example
 * ```tsx
 * <ChevronArrowIcon size={20} direction="right" />
 * <ChevronArrowIcon direction="left" className="text-blue-500" />
 * ```
 */
export const ChevronArrowIcon: React.FC<ChevronArrowIconProps> = ({
  size = 24,
  color = 'currentColor',
  direction = 'right',
  className = '',
  onClick,
  'aria-label': ariaLabel,
}) => {
  const getRotation = () => {
    switch (direction) {
      case 'left':
        return 'rotate-0';
      case 'up':
        return '-rotate-90';
      case 'down':
        return 'rotate-90';
      case 'right':
      default:
        return '';
    }
  };

  const getPoints = () => {
    switch (direction) {
      case 'left':
        return '15 18 9 12 15 6';
      case 'up':
        return '18 15 12 9 6 9';
      case 'down':
        return '6 9 12 15 18 9';
      case 'right':
      default:
        return '9 18 15 12 9 6';
    }
  };

  return (
    <svg
      className={`${getRotation()} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <polyline points={getPoints()} />
    </svg>
  );
};

export default ChevronArrowIcon;
