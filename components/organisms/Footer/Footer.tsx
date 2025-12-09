import { FooterColumn } from '@/components/molecules/FooterColumn/FooterColumn';
import { SocialLinks } from '@/components/molecules/SocialLinks/SocialLinks';
import { NewsletterForm } from '@/components/molecules/NewsletterForm/NewsletterForm';
import { FooterLink } from '@/components/atoms/FooterLink/FooterLink';
import { P, Small } from '@/components/atoms/Typography/Typography';
import { PawPrint } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] border-t border-gray-800 pt-16 pb-8" id="footer">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2 text-[#658C58]">
                            <PawPrint size={32} />
                            <span className="text-2xl font-bold text-gray-100">CarePet</span>
                        </div>
                        <P className="text-gray-400 text-sm max-w-xs">
                            Professional pet care services trusted by thousands of happy pet owners. We treat your pets like family.
                        </P>
                        <SocialLinks />
                    </div>

                    {/* Value Proposition / Services */}
                    <FooterColumn title="Services">
                        <FooterLink href="/services/grooming">Pet Grooming</FooterLink>
                        <FooterLink href="/services/sitting">Pet Sitting</FooterLink>
                        <FooterLink href="/services/veterinary">Veterinary Care</FooterLink>
                        <FooterLink href="/services/training">Dog Training</FooterLink>
                        <FooterLink href="/services/nutrition">Nutrition Advice</FooterLink>
                    </FooterColumn>

                    {/* Company */}
                    <FooterColumn title="Company">
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/careers">Careers</FooterLink>
                        <FooterLink href="/blog">Blog</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    </FooterColumn>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <FooterColumn title="Newsletter">
                            <P className="text-gray-400 text-sm mb-4">
                                Stay updated with our latest tips and offers.
                            </P>
                            <NewsletterForm />
                        </FooterColumn>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Small className="text-gray-500">
                        © {new Date().getFullYear()} CarePet. All rights reserved.
                    </Small>
                    <div className="flex space-x-6">
                        <FooterLink href="/terms" className="text-xs">Terms of Service</FooterLink>
                        <FooterLink href="/privacy" className="text-xs">Privacy Policy</FooterLink>
                        <FooterLink href="/cookies" className="text-xs">Cookie Policy</FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};
