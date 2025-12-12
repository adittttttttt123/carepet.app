'use client';

import { Settings, User, Lock, Bell, Shield, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card/Card';

interface SettingItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
}

const settingsItems: SettingItem[] = [
  {
    id: '1',
    icon: <User size={18} />,
    label: 'Edit Profil',
    description: 'Ubah nama, foto, dan informasi',
    href: '/dashboard/settings/profile',
  },
  {
    id: '2',
    icon: <Lock size={18} />,
    label: 'Ubah Password',
    description: 'Perbarui password akun',
    href: '/dashboard/settings/password',
  },
  {
    id: '3',
    icon: <Bell size={18} />,
    label: 'Notifikasi',
    description: 'Atur preferensi notifikasi',
    href: '/dashboard/settings/notifications',
  },
  {
    id: '4',
    icon: <Shield size={18} />,
    label: 'Keamanan',
    description: 'Verifikasi dua langkah',
    href: '/dashboard/settings/security',
  },
];

export const AccountSettingsCard = () => {
  return (
    <Card hover shadow="lg">
      <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gray-200">
            <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </div>
          <CardTitle className="text-base sm:text-xl">Pengaturan Akun</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {/* User Profile Summary */}
        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 mb-4 rounded-xl bg-gradient-to-r from-[#F0E491]/20 to-[#BBC863]/10 border border-[#BBC863]/20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#658C58] to-[#31694E] flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg flex-shrink-0">
            A
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">Nama Pengguna</h3>
            <p className="text-xs sm:text-sm text-gray-600 truncate">user@email.com</p>
            <p className="text-xs text-[#658C58] mt-0.5">Akun Terverifikasi ✓</p>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {settingsItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#658C58]/5 hover:to-[#BBC863]/5 transition-all duration-200 text-left group"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-gray-100 group-hover:bg-[#658C58]/20 transition-colors flex-shrink-0">
                <div className="text-gray-600 group-hover:text-[#658C58] transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 group-hover:text-[#31694E] transition-colors text-sm">
                  {item.label}
                </h4>
                <p className="text-xs text-gray-500 truncate">{item.description}</p>
              </div>
              <ChevronRight size={16} className="text-gray-400 group-hover:text-[#658C58] group-hover:translate-x-1 transition-all flex-shrink-0" />
            </button>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="w-full py-2.5 text-center text-red-600 font-medium hover:bg-red-50 rounded-xl transition-colors text-sm">
            Hapus Akun
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
