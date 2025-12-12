'use client';

import { PawPrint, Heart, Calendar, Edit, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/atoms/Card/Card';
import { Button } from '@/components/atoms/Button/Button';

interface Pet {
    id: string;
    name: string;
    type: string;
    breed: string;
    age: string;
    weight: string;
    healthStatus: 'Sehat' | 'Perlu Perhatian' | 'Dalam Perawatan';
    lastCheckup: string;
}

const mockPets: Pet[] = [
    {
        id: '1',
        name: 'Mochi',
        type: 'Kucing',
        breed: 'Persian',
        age: '2 tahun',
        weight: '4.5 kg',
        healthStatus: 'Sehat',
        lastCheckup: '10 Des 2024',
    },
    {
        id: '2',
        name: 'Bruno',
        type: 'Anjing',
        breed: 'Golden Retriever',
        age: '3 tahun',
        weight: '28 kg',
        healthStatus: 'Sehat',
        lastCheckup: '5 Des 2024',
    },
];

export const PetProfileCard = () => {
    const getHealthBadgeColor = (status: Pet['healthStatus']) => {
        switch (status) {
            case 'Sehat':
                return 'bg-[#658C58]/20 text-[#31694E]';
            case 'Perlu Perhatian':
                return 'bg-[#F0E491]/30 text-[#8B7A2B]';
            case 'Dalam Perawatan':
                return 'bg-red-100 text-red-700';
        }
    };

    return (
        <Card hover shadow="lg" className="h-full flex flex-col">
            <CardHeader className="bg-gradient-to-r from-[#658C58]/10 to-[#BBC863]/10 flex-shrink-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#658C58]/20">
                            <PawPrint className="h-5 w-5 sm:h-6 sm:w-6 text-[#658C58]" />
                        </div>
                        <CardTitle className="text-base sm:text-xl">Profil Hewan Saya</CardTitle>
                    </div>
                    <Button variant="primary" size="sm" leftIcon={<Plus size={14} />} className="text-xs sm:text-sm">
                        Tambah
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
                <div className="space-y-3">
                    {mockPets.map((pet) => (
                        <div
                            key={pet.id}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-[#BBC863]/50 hover:bg-gradient-to-r hover:from-[#F0E491]/10 hover:to-white transition-all duration-200"
                        >
                            {/* Pet Avatar */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#BBC863] to-[#658C58] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                <PawPrint size={24} />
                            </div>

                            {/* Pet Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{pet.name}</h4>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getHealthBadgeColor(pet.healthStatus)}`}>
                                        {pet.healthStatus}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 truncate">
                                    {pet.type} • {pet.breed}
                                </p>
                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Heart size={10} className="text-[#658C58]" />
                                        {pet.weight}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={10} className="text-[#658C58]" />
                                        {pet.lastCheckup}
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
                                <Edit size={16} className="text-gray-500" />
                            </button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
