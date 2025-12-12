'use client';

import { CreditCard, CheckCircle, Clock, XCircle, Download, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card/Card';

interface Payment {
    id: string;
    orderId: string;
    description: string;
    amount: string;
    date: string;
    status: 'Berhasil' | 'Pending' | 'Gagal';
    method: string;
}

const mockPayments: Payment[] = [
    {
        id: '1',
        orderId: 'INV-001',
        description: 'Penitipan Mochi (4 hari)',
        amount: 'Rp 600.000',
        date: '5 Des',
        status: 'Berhasil',
        method: 'Transfer',
    },
    {
        id: '2',
        orderId: 'INV-002',
        description: 'Grooming Bruno',
        amount: 'Rp 150.000',
        date: '3 Des',
        status: 'Berhasil',
        method: 'E-Wallet',
    },
    {
        id: '3',
        orderId: 'INV-003',
        description: 'Vaksinasi Mochi',
        amount: 'Rp 250.000',
        date: '1 Des',
        status: 'Pending',
        method: 'Transfer',
    },
];

export const PaymentHistoryCard = () => {
    const getStatusIcon = (status: Payment['status']) => {
        switch (status) {
            case 'Berhasil':
                return <CheckCircle size={14} className="text-[#658C58]" />;
            case 'Pending':
                return <Clock size={14} className="text-[#BBC863]" />;
            case 'Gagal':
                return <XCircle size={14} className="text-red-500" />;
        }
    };

    const getStatusBadgeColor = (status: Payment['status']) => {
        switch (status) {
            case 'Berhasil':
                return 'bg-[#658C58]/20 text-[#31694E]';
            case 'Pending':
                return 'bg-[#F0E491]/30 text-[#8B7A2B]';
            case 'Gagal':
                return 'bg-red-100 text-red-700';
        }
    };

    return (
        <Card hover shadow="lg" className="h-full flex flex-col">
            <CardHeader className="bg-gradient-to-r from-[#658C58]/10 to-[#31694E]/10 flex-shrink-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#658C58]/20">
                            <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-[#658C58]" />
                        </div>
                        <CardTitle className="text-base sm:text-xl">Riwayat Pembayaran</CardTitle>
                    </div>
                    <button className="text-xs text-[#658C58] font-medium hover:underline flex items-center gap-1">
                        <Download size={12} />
                        <span className="hidden sm:inline">Export</span>
                    </button>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="space-y-3">
                    {mockPayments.map((payment) => (
                        <div
                            key={payment.id}
                            className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#658C58]/30 hover:shadow-sm transition-all duration-200"
                        >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#658C58]/20 to-[#31694E]/20 flex items-center justify-center flex-shrink-0">
                                    <CreditCard size={18} className="text-[#31694E]" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h4 className="font-semibold text-gray-900 text-sm truncate">{payment.description}</h4>
                                        <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusBadgeColor(payment.status)}`}>
                                            {getStatusIcon(payment.status)}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">
                                        {payment.date} • {payment.method}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <p className="font-bold text-[#31694E] text-sm">{payment.amount}</p>
                                <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors hidden sm:block">
                                    <Eye size={16} className="text-gray-500" />
                                </button>
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
