import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FooterLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export const FooterLink = ({ href, children, className }: FooterLinkProps) => {
    return (
        <Link
            href={href}
            className={cn(
                'text-gray-400 hover:text-[#BBC863] transition-colors duration-200 text-sm py-1 block w-fit',
                className
            )}
        >
            {children}
        </Link>
    );
};
