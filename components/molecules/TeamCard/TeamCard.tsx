// TeamCard.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/atoms/Card';
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
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Avatar Placeholder */}
            <div
              className="
                h-16 w-16 rounded-full
                flex items-center justify-center
                text-white text-xl font-bold
              "
              style={{
                background: `linear-gradient(135deg, #658C58, #31694E)`,
                boxShadow: `0 4px 12px #31694E30`
              }}
            >
              {name.charAt(0)}
            </div>
            
            {/* Name & Role */}
            <div className="space-y-1">
              <H3 className="text-xl font-bold text-[#F0E491]">
                {name}
              </H3>
              <P className="text-[#BBC863] font-medium">
                {role}
              </P>
              {experience && (
                <div className="flex items-center justify-center text-gray-200 text-sm opacity-80">
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
            <P className="text-gray-200 text-sm leading-relaxed opacity-80">
              {description}
            </P>
            
            {/* Specialties */}
            {specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {specialties.map((specialty, index) => (
                  <Small
                    key={index}
                    className="
                      text-xs px-2 py-1 rounded-full
                      bg-[#31694E]/20 text-[#31694E]
                    "
                  >
                    {specialty}
                  </Small>
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
