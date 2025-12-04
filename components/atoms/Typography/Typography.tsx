import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl', className)}
      {...props}
    >
      {children}
    </h1>
  )
);
H1.displayName = 'H1';

const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-3xl font-bold text-gray-900 md:text-4xl', className)}
      {...props}
    >
      {children}
    </h2>
  )
);
H2.displayName = 'H2';

const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-bold text-gray-900', className)}
      {...props}
    >
      {children}
    </h3>
  )
);
H3.displayName = 'H3';

const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-base text-gray-600', className)}
      {...props}
    >
      {children}
    </p>
  )
);
P.displayName = 'P';

const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg text-gray-600', className)}
      {...props}
    >
      {children}
    </p>
  )
);
Lead.displayName = 'Lead';

const Small = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-500', className)}
      {...props}
    >
      {children}
    </p>
  )
);
Small.displayName = 'Small';

export { H1, H2, H3, P, Lead, Small };