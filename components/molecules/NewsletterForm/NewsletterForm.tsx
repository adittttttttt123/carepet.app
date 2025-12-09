'use client';

import { Button } from '@/components/atoms/Button/Button';
import { Input } from '@/components/atoms/Input/Input';
import { Send } from 'lucide-react';

export const NewsletterForm = () => {
    return (
        <form className="mt-6 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="email"
                    placeholder="Email address"
                    className="bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:ring-[#658C58] focus:border-[#658C58]"
                />
                <Button variant="primary" size="md" className="p-3" aria-label="Subscribe">
                    <Send size={18} />
                </Button>
            </div>
            <p className="text-xs text-gray-500">
                Subscribe to our newsletter for the latest updates.
            </p>
        </form>
    );
};
