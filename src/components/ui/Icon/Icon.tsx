import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

interface IconProps {
  icon: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Icon = ({ 
  icon, 
  className = '',
  width = 24,
  height = 24,
  color,
  onClick,
  ...props 
}: IconProps) => {
  return (
    <IconifyIcon
      icon={icon}
      className={className}
      width={width}
      height={height}
      color={color}
      onClick={onClick}
      {...props}
    />
  );
};
