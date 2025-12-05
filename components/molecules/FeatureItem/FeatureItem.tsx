import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/atoms/Card';
import { H3, P } from '@/components/atoms/Typography';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

const FeatureItem = React.forwardRef<HTMLDivElement, FeatureItemProps>(
  ({ icon, title, description, iconColor = '#3b82f6', className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
          className
        )}
      >
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Icon */}
            <div 
              className="p-3 rounded-xl mb-2"
              style={{ 
                backgroundColor: `${iconColor}15`,
                color: iconColor 
              }}
            >
              {icon}
            </div>
            
            {/* Title & Description */}
            <H3 className="text-lg font-semibold text-gray-900">{title}</H3>
            <P className="text-gray-600 text-sm leading-relaxed">{description}</P>
          </div>
        </CardContent>
      </Card>
    );
  }
);

FeatureItem.displayName = 'FeatureItem';

export { FeatureItem };