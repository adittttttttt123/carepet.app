import Image from 'next/image';
import { Calendar, Shield, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-cyan-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Perawatan <span className="text-blue-600">Hewan</span> Terbaik untuk Sahabat Anda
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Layanan grooming, kesehatan, dan penitipan hewan profesional dengan perhatian penuh kasih sayang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg">
                Booking Sekarang
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors font-semibold text-lg">
                Lihat Layanan
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder image - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <Heart className="h-32 w-32 text-white opacity-80" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <Shield className="h-12 w-12 text-green-500" />
                <div>
                  <h3 className="font-bold text-gray-900">Terpercaya</h3>
                  <p className="text-gray-600">100% aman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;