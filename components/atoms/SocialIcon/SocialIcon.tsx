import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SocialIconProps {
    href: string;
    icon: ReactNode;
    label: string;
    className?: string;
}

export const SocialIcon = ({ href, icon, label, className }: SocialIconProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
                'w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#658C58] hover:text-white transition-all duration-300',
                className
            )}
        >
            {icon}
        </a>
    );
};
