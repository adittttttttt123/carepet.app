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
        className={cn('h-full hover:shadow-lg transition-shadow duration-300', className)}
      >
        <CardContent className="pt-6">
          <div className="flex flex-col space-y-4">
            {/* Icon */}
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 self-start">
              {icon}
            </div>
            
            {/* Value & Label */}
            <div className="space-y-1">
              <H2 className="text-3xl font-bold text-gray-900">{value}</H2>
              <P className="font-semibold text-gray-700">{label}</P>
            </div>
            
            {/* Description */}
            {description && (
              <Lead className="text-gray-600">{description}</Lead>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

StatsCard.displayName = 'StatsCard';

export { StatsCard };