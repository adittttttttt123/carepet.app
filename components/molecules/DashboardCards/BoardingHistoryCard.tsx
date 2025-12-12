'use client';

import { History, Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card/Card';

interface BoardingRecord {
    id: string;
    petName: string;
    startDate: string;
    endDate: string;
    days: number;
    status: 'Selesai' | 'Dibatalkan' | 'Berlangsung';
    totalCost: string;
}

const mockHistory: BoardingRecord[] = [
    {
        id: '1',
        petName: 'Mochi',
        startDate: '1 Des',
        endDate: '5 Des',
        days: 4,
        status: 'Selesai',
        totalCost: 'Rp 600.000',
    },
    {
        id: '2',
        petName: 'Bruno',
        startDate: '15 Nov',
        endDate: '20 Nov',
        days: 5,
        status: 'Selesai',
        totalCost: 'Rp 750.000',
    },
    {
        id: '3',
        petName: 'Mochi',
        startDate: '1 Okt',
        endDate: '3 Okt',
        days: 2,
        status: 'Dibatalkan',
        totalCost: 'Rp 0',
    },
];

export const BoardingHistoryCard = () => {
    const getStatusIcon = (status: BoardingRecord['status']) => {
        switch (status) {
            case 'Selesai':
                return <CheckCircle size={14} className="text-[#658C58]" />;
            case 'Berlangsung':
                return <Clock size={14} className="text-[#BBC863]" />;
            case 'Dibatalkan':
                return <XCircle size={14} className="text-red-500" />;
        }
    };

    const getStatusBadgeColor = (status: BoardingRecord['status']) => {
        switch (status) {
            case 'Selesai':
                return 'bg-[#658C58]/20 text-[#31694E]';
            case 'Berlangsung':
                return 'bg-[#F0E491]/30 text-[#8B7A2B]';
            case 'Dibatalkan':
                return 'bg-red-100 text-red-700';
        }
    };

    return (
        <Card hover shadow="lg" className="h-full flex flex-col">
            <CardHeader className="bg-gradient-to-r from-[#BBC863]/10 to-[#658C58]/10 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#BBC863]/20">
                        <History className="h-5 w-5 sm:h-6 sm:w-6 text-[#658C58]" />
                    </div>
                    <CardTitle className="text-base sm:text-xl">Riwayat Penitipan</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="space-y-3">
                    {mockHistory.map((record) => (
                        <div
                            key={record.id}
                            className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#BBC863]/50 hover:shadow-sm transition-all duration-200"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#F0E491]/50 to-[#BBC863]/30 flex items-center justify-center flex-shrink-0">
                                    <Calendar size={18} className="text-[#658C58]" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h4 className="font-semibold text-gray-900 text-sm">{record.petName}</h4>
                                        <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusBadgeColor(record.status)}`}>
                                            {getStatusIcon(record.status)}
                                            <span className="hidden sm:inline">{record.status}</span>
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600">
                                        {record.startDate} - {record.endDate}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <p className="font-bold text-[#31694E] text-sm">{record.totalCost}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 w-full py-2.5 text-center text-[#658C58] font-medium hover:bg-[#658C58]/10 rounded-xl transition-colors text-sm">
                    Lihat Semua →
                </button>
            </CardContent>
        </Card>
    );
};
