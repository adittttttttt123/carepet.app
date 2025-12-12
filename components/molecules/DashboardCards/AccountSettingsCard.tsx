'use client';

import { Settings, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms/Card/Card';
import Link from 'next/link';

export const AccountSettingsCard = () => {
  return (
    <Link href="/dashboard/settings">
      <Card hover shadow="lg" className="h-full group cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 text-white shadow-lg group-hover:scale-105 transition-transform">
                <Settings size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Pengaturan Akun</h3>
                <p className="text-sm text-gray-500">Profil, keamanan, notifikasi</p>
              </div>
            </div>
            <ChevronRight size={24} className="text-gray-400 group-hover:text-[#658C58] group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
