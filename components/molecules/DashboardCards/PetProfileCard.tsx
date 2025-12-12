'use client';

import { PawPrint, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/atoms/Card/Card';
import Link from 'next/link';

export const PetProfileCard = () => {
    return (
        <Link href="/dashboard/pets">
            <Card hover shadow="lg" className="h-full group cursor-pointer">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#658C58] to-[#31694E] text-white shadow-lg group-hover:scale-105 transition-transform">
                                <PawPrint size={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Profil Hewan</h3>
                                <p className="text-sm text-gray-500">Kelola hewan peliharaan Anda</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-2xl font-bold text-[#31694E]">2</p>
                                <p className="text-xs text-gray-500">Hewan</p>
                            </div>
                            <ChevronRight size={24} className="text-gray-400 group-hover:text-[#658C58] group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
