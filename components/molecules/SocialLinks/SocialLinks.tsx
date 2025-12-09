import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { SocialIcon } from '@/components/atoms/SocialIcon/SocialIcon';

export const SocialLinks = () => {
    return (
        <div className="flex gap-4">
            <SocialIcon
                href="https://instagram.com"
                icon={<Instagram size={20} />}
                label="Instagram"
            />
            <SocialIcon
                href="https://facebook.com"
                icon={<Facebook size={20} />}
                label="Facebook"
            />
            <SocialIcon
                href="https://twitter.com"
                icon={<Twitter size={20} />}
                label="Twitter"
            />
            <SocialIcon
                href="https://linkedin.com"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
            />
        </div>
    );
};
