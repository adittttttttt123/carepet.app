import { DashboardLayout } from '@/components/templates/DashboardLayout/DashboardLayout';
import {
    PetProfileCard,
    BoardingHistoryCard,
    ServiceOrderCard,
    BoardingStatusCard,
    PaymentHistoryCard,
    AccountSettingsCard
} from '@/components/molecules/DashboardCards';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            {/* Dashboard Header */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">Selamat datang kembali! Kelola hewan peliharaan Anda dengan mudah.</p>
            </div>

            {/* Status Penitipan Aktif - Full Width */}
            <div className="mb-6" id="status">
                <BoardingStatusCard />
            </div>

            {/* Main Grid - Responsive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div id="pets">
                    <PetProfileCard />
                </div>
                <div id="services">
                    <ServiceOrderCard />
                </div>
                <div id="boarding-history">
                    <BoardingHistoryCard />
                </div>
                <div id="payments">
                    <PaymentHistoryCard />
                </div>
            </div>

            {/* Account Settings - Full Width */}
            <div id="settings">
                <AccountSettingsCard />
            </div>
        </DashboardLayout>
    );
}
