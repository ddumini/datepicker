import type { ContainerProps } from './types';

export const Container = ({ children, className, theme = 'primary' }: ContainerProps) => {
  const baseClasses = 'rounded-lg p-4 flex flex-col gap-4';
  const themeClasses = {
    primary: 'border border-gray-200',
    secondary: 'border border-amber-500',
    dark: 'border border-gray-200',
  };

  const combinedClasses = [baseClasses, themeClasses[theme], className].filter(Boolean).join(' ');

  return <div className={combinedClasses}>{children}</div>;
};
