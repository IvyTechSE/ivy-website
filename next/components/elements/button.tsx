import { LinkProps } from 'next/link';
import React from 'react';



import { cn } from '@/lib/utils';





interface ButtonProps {
  variant?: 'simple' | 'outline' | 'primary' | 'muted';
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  href?: LinkProps['href'];
  onClick?: () => void;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  className,
  children,
  ...props
}) => {
  const variantClass =
    variant === 'simple'
      ? 'bg-transparent text-foreground hover:bg-muted/40 border border-transparent hover:border-border'
      : variant === 'outline'
        ? 'bg-card text-foreground border border-border hover:bg-muted/60'
        : variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-inner-alt'
          : variant === 'muted'
            ? 'bg-muted text-muted-foreground hover:bg-muted/70 border border-transparent'
            : '';
  const Element = Tag as any;

  return (
    <Element
      className={cn(
        'relative z-10 text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variantClass,
        className
      )}
      {...props}
    >
      {children ?? `Get Started`}
    </Element>
  );
};
