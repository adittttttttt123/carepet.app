// StatsCard.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/atoms/Card';
import { H2, P, Lead } from '@/components/atoms/Typography';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  className?: string;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ icon, value, label, description, className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          `
            h-full
            rounded-2xl
            border border-[#F0E491]/20
            bg-white/5 backdrop-blur-sm
            shadow-lg shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            transition-all duration-300
          `,
          className
        )}
      >
        <CardContent className="pt-6 px-6 pb-8">
          <div className="flex flex-col space-y-4">
            {/* Icon */}
            <div
              className="p-3 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: '#658C58' + '20',
                color: '#658C58',
                boxShadow: `0 4px 12px #658C58 30`
              }}
            >
              {icon}
            </div>
            
            {/* Value & Label */}
            <div className="space-y-1">
              <H2 className="text-3xl font-bold text-[#F0E491]">
                {value}
              </H2>
              <P className="font-semibold text-[#BBC863]">
                {label}
              </P>
            </div>
            
            {/* Description */}
            {description && (
              <Lead className="text-white opacity-80">
                {description}
              </Lead>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

StatsCard.displayName = 'StatsCard';

export { StatsCard };
