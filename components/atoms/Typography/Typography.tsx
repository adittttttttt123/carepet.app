import React from 'react';
import { cn } from '@/lib/utils';

// Heading Components
const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl', className)}
      {...props}
    />
  )
);
H1.displayName = 'H1';

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-3xl font-bold text-gray-900 md:text-4xl', className)}
      {...props}
    />
  )
);
H2.displayName = 'H2';

const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-bold text-gray-900', className)}
      {...props}
    />
  )
);
H3.displayName = 'H3';

// Text Components
const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-gray-600', className)}
      {...props}
    />
  )
);
P.displayName = 'P';

const Lead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg text-gray-600', className)}
      {...props}
    />
  )
);
Lead.displayName = 'Lead';

const Small = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-500', className)}
      {...props}
    />
  )
);
Small.displayName = 'Small';

export { H1, H2, H3, P, Lead, Small };