import React from 'react';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  CardActions as MuiCardActions,
  CardProps as MuiCardProps,
  CardContentProps,
  CardHeaderProps,
  CardActionsProps,
} from '@mui/material';

export interface CustomCardProps extends MuiCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '', ...props }: CustomCardProps) => {
  return (
    <MuiCard
      className={`shadow-sm rounded-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </MuiCard>
  );
};

export const CardHeader = ({
  children,
  className = '',
  ...props
}: CardHeaderProps) => {
  return (
    <MuiCardHeader
      className={`border-b border-gray-200 dark:border-darkblue-700 ${className}`}
      {...props}
    >
      {children}
    </MuiCardHeader>
  );
};

export const CardContent = ({
  children,
  className = '',
  ...props
}: CardContentProps) => {
  return (
    <MuiCardContent className={`${className}`} {...props}>
      {children}
    </MuiCardContent>
  );
};

export const CardActions = ({
  children,
  className = '',
  ...props
}: CardActionsProps) => {
  return (
    <MuiCardActions
      className={`border-t border-gray-200 dark:border-darkblue-700 ${className}`}
      {...props}
    >
      {children}
    </MuiCardActions>
  );
};
