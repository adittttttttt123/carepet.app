'use client';

import { Clock, MapPin, Activity, Phone, Camera } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card/Card';
import { Button } from '@/components/atoms/Button/Button';

interface ActiveBoarding {
    id: string;
    petName: string;
    startDate: string;
    endDate: string;
    daysRemaining: number;
    status: 'Aktif' | 'Check-in' | 'Check-out';
    location: string;
    caretaker: string;
    lastActivity: string;
    lastActivityTime: string;
}

const activeBoarding: ActiveBoarding | null = {
    id: '1',
    petName: 'Mochi',
    startDate: '10 Des 2024',
    endDate: '15 Des 2024',
    daysRemaining: 3,
    status: 'Aktif',
    location: 'Kandang Premium A-5',
    caretaker: 'Pak Budi',
    lastActivity: 'Baru saja diberi makan',
    lastActivityTime: '10 menit lalu',
};

export const BoardingStatusCard = () => {
    if (!activeBoarding) {
        return (
            <Card hover shadow="lg">
                <CardHeader className="bg-gradient-to-r from-[#F0E491]/10 to-[#BBC863]/10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#F0E491]/30">
                            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#8B7A2B]" />
                        </div>
                        <CardTitle className="text-base sm:text-xl">Status Penitipan</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-6 sm:py-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                            <Clock size={32} className="text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-700 mb-2">Tidak Ada Penitipan Aktif</h4>
                        <p className="text-sm text-gray-500 mb-4">Hewan peliharaan Anda tidak sedang dititipkan</p>
                        <Button variant="primary" size="sm">Buat Reservasi</Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card hover shadow="lg" className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#658C58] to-[#31694E] text-white">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white/20">
                            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-white text-base sm:text-xl">Status Penitipan</CardTitle>
                            <p className="text-xs sm:text-sm text-white/80">Penitipan Aktif</p>
                        </div>
                    </div>
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-[#F0E491] text-[#31694E] text-xs font-bold animate-pulse">
                        LIVE
                    </span>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                {/* Pet Info Banner */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F0E491]/20 to-[#BBC863]/10 border-b border-gray-100">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#BBC863] to-[#658C58] flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg flex-shrink-0">
                            {activeBoarding.petName.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{activeBoarding.petName}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">
                                {activeBoarding.startDate} - {activeBoarding.endDate}
                            </p>
                            <span className="inline-block mt-1 text-xs bg-[#658C58]/20 text-[#31694E] px-2 py-0.5 rounded-full font-medium">
                                {activeBoarding.daysRemaining} hari tersisa
                            </span>
                        </div>
                    </div>
                </div>

                {/* Status Details */}
                <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gray-50">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <MapPin size={14} />
                                <span className="text-xs">Lokasi</span>
                            </div>
                            <p className="font-semibold text-gray-900 text-sm truncate">{activeBoarding.location}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-gray-50">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Activity size={14} />
                                <span className="text-xs">Pengasuh</span>
                            </div>
                            <p className="font-semibold text-gray-900 text-sm">{activeBoarding.caretaker}</p>
                        </div>
                    </div>

                    {/* Last Activity */}
                    <div className="p-3 sm:p-4 rounded-xl border border-[#BBC863]/30 bg-[#F0E491]/10 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#658C58] flex items-center justify-center flex-shrink-0">
                                <Activity size={16} className="text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-semibold text-gray-900 text-sm">{activeBoarding.lastActivity}</p>
                                <p className="text-xs text-gray-600">{activeBoarding.lastActivityTime}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" size="sm" leftIcon={<Camera size={16} />} className="w-full text-xs sm:text-sm">
                            Lihat Foto
                        </Button>
                        <Button variant="primary" size="sm" leftIcon={<Phone size={16} />} className="w-full text-xs sm:text-sm">
                            Hubungi
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
