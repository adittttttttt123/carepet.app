import { ReactNode } from 'react';
import { H3 } from '@/components/atoms/Typography/Typography';

interface FooterColumnProps {
    title: string;
    children: ReactNode;
    className?: string;
}

export const FooterColumn = ({ title, children, className }: FooterColumnProps) => {
    return (
        <div className={className}>
            <H3 className="text-gray-100 mb-6 text-lg font-semibold">{title}</H3>
            <div className="flex flex-col space-y-3">
                {children}
            </div>
        </div>
    );
};
