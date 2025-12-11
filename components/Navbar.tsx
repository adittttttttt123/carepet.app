'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PawPrint, Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/#about' },
    { name: 'Layanan', href: '/#services' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Hubungi Kami', href: '/#footer' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#658C58] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-white-600" />
              <span className="font-bold text-xl text-white">Care Pet</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#A3C9A8] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-[#F0E491] text-[#31694E] px-6 py-2 rounded-full hover:bg-[#557A47] hover:text-white transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/admin/login"
              className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm"
              title="Admin Portal"
            >
              <Shield className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="block w-full mt-4 bg-[#658C58] text-white px-6 py-2 rounded-full hover:bg-[#557A47] transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/admin/login"
                className="flex items-center justify-center gap-2 w-full mt-2 text-white/70 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="h-4 w-4" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;