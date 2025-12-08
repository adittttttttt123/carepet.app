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
  ({ icon, title, description, iconColor = '#658C58', className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          `
            h-full 
            rounded-2xl 
            border border-[#F0E491]/20
            bg-white/5 
            backdrop-blur-sm
            shadow-lg shadow-black/10 
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-1 
            transition-all duration-300
          `,
          className
        )}
      >
        <CardContent className="pt-6 px-6 pb-8">
          <div className="flex flex-col items-center text-center space-y-4">

            {/* Icon */}
            <div
              className="
                p-3 rounded-2xl
                shadow-md shadow-black/10
                flex items-center justify-center
              "
              style={{
                background: `${iconColor}20`,
                color: iconColor,
                boxShadow: `0 4px 12px ${iconColor}30`
              }}
            >
              {icon}
            </div>

            {/* Title & Description */}
            <H3 className="text-lg font-semibold text-[#F0E491]">
              {title}
            </H3>

            <P className="text-gray-200 text-sm leading-relaxed opacity-80">
              {description}
            </P>
          </div>
        </CardContent>
      </Card>
    );
  }
);

FeatureItem.displayName = 'FeatureItem';

export { FeatureItem };
