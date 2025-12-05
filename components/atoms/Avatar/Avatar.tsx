import React from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = 'Avatar', size = 'md', fallback, children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-12 w-12 text-sm',
      lg: 'h-16 w-16 text-base',
      xl: 'h-24 w-24 text-lg',
    };

    const renderContent = () => {
      if (src) {
        return (
          <img
            src={src}
            alt={alt}
            className="h-full w-full rounded-full object-cover"
          />
        );
      }

      if (fallback) {
        return (
          <span className="font-semibold">
            {fallback.substring(0, 2).toUpperCase()}
          </span>
        );
      }

      return <User className="h-1/2 w-1/2 text-gray-400" />;
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full bg-gray-100 overflow-hidden',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {renderContent()}
        {children}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };