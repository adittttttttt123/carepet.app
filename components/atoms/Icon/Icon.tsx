import React from 'react';
import { cn } from '@/lib/utils';
import {
  Heart,
  Shield,
  Users,
  Award,
  Star,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

const icons = {
  heart: Heart,
  shield: Shield,
  users: Users,
  award: Award,
  star: Star,
  check: CheckCircle,
  clock: Clock,
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, name, size = 'md', color, ...props }, ref) => {
    const IconComponent = icons[name];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(sizeClasses[size], className)}
        style={color ? { color } : undefined}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };