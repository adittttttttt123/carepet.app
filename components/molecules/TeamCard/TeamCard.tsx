import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { H3, P, Small } from '@/components/atoms/Typography';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  experience?: string;
  specialties?: string[];
  className?: string;
}

const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  ({ 
    name, 
    role, 
    description, 
    experience, 
    specialties = [],
    className 
  }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn('h-full hover:shadow-lg transition-shadow duration-300', className)}
      >
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Avatar Placeholder */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xl font-bold">
              {name.charAt(0)}
            </div>
            
            {/* Name & Role */}
            <div className="space-y-1">
              <H3 className="text-xl font-bold text-gray-900">{name}</H3>
              <P className="text-blue-600 font-medium">{role}</P>
              {experience && (
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <svg 
                    className="w-4 h-4 mr-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <span>{experience} pengalaman</span>
                </div>
              )}
            </div>
            
            {/* Description */}
            <P className="text-gray-600 text-sm leading-relaxed">{description}</P>
            
            {/* Specialties */}
            {specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {specialties.map((specialty, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

TeamCard.displayName = 'TeamCard';

export { TeamCard };