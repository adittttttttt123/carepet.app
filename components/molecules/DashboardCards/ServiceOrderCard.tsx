'use client';

import { ShoppingCart, Scissors, Heart, Home, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card/Card';
import { Button } from '@/components/atoms/Button/Button';

interface Service {
    id: string;
    name: string;
    description: string;
    price: string;
    icon: 'grooming' | 'health' | 'boarding';
    color: string;
}

const services: Service[] = [
    {
        id: '1',
        name: 'Grooming',
        description: 'Mandi, potong kuku, bersihkan telinga',
        price: 'Rp 75.000',
        icon: 'grooming',
        color: 'from-[#F0E491] to-[#BBC863]',
    },
    {
        id: '2',
        name: 'Kesehatan',
        description: 'Vaksinasi, konsultasi dokter',
        price: 'Rp 100.000',
        icon: 'health',
        color: 'from-[#BBC863] to-[#658C58]',
    },
    {
        id: '3',
        name: 'Penitipan',
        description: 'Penitipan harian dengan fasilitas lengkap',
        price: 'Rp 150.000/hari',
        icon: 'boarding',
        color: 'from-[#658C58] to-[#31694E]',
    },
];

export const ServiceOrderCard = () => {
    const getIcon = (icon: Service['icon']) => {
        switch (icon) {
            case 'grooming':
                return <Scissors size={20} />;
            case 'health':
                return <Heart size={20} />;
            case 'boarding':
                return <Home size={20} />;
        }
    };

    return (
        <Card hover shadow="lg" className="h-full flex flex-col">
            <CardHeader className="bg-gradient-to-r from-[#31694E]/10 to-[#658C58]/10 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#31694E]/20">
                        <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-[#31694E]" />
                    </div>
                    <CardTitle className="text-base sm:text-xl">Pemesanan Layanan</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="space-y-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative overflow-hidden rounded-xl border border-gray-100 hover:border-transparent hover:shadow-md transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            <div className="relative p-3 sm:p-4 flex items-center gap-3">
                                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-md flex-shrink-0`}>
                                    {getIcon(service.icon)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                                        {service.name}
                                    </h4>
                                    <p className="text-xs text-gray-600 truncate">{service.description}</p>
                                    <p className="text-xs font-semibold text-[#658C58] mt-0.5">{service.price}</p>
                                </div>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="hidden sm:flex text-xs"
                                    rightIcon={<ArrowRight size={14} />}
                                >
                                    Pesan
                                </Button>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="sm:hidden p-2"
                                >
                                    <ArrowRight size={14} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
