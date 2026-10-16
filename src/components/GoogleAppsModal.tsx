import React, { useRef, useEffect } from 'react';
import {
  Search,
  MapPin,
  Youtube,
  PlaySquare,
  Newspaper,
  Mail,
  Video,
  HardDrive,
  Calendar,
  Languages,
  Image as ImageIcon,
  FileText,
  Compass,
  X
} from 'lucide-react';

interface GoogleAppsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppItem {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

/**
 * Google Uygulamaları Açılır Çekmecesi (9-Nokta Waffle Menüsü)
 * Kullanıcı waffle simgesine tıkladığında açılan Google servisleri
 */
export const GoogleAppsModal: React.FC<GoogleAppsModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Dışarıya tıklandığında menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const apps: AppItem[] = [
    { name: 'Google Hesabı', icon: <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">EÖ</div>, url: '#', color: 'text-blue-500' },
    { name: 'Arama', icon: <Search className="w-7 h-7 text-blue-500" />, url: 'https://google.com', color: 'text-blue-500' },
    { name: 'Haritalar', icon: <MapPin className="w-7 h-7 text-green-500" />, url: 'https://maps.google.com', color: 'text-green-500' },
    { name: 'YouTube', icon: <Youtube className="w-7 h-7 text-red-600" />, url: 'https://youtube.com', color: 'text-red-600' },
    { name: 'Play', icon: <PlaySquare className="w-7 h-7 text-teal-500" />, url: 'https://play.google.com', color: 'text-teal-500' },
    { name: 'Haberler', icon: <Newspaper className="w-7 h-7 text-blue-400" />, url: 'https://news.google.com', color: 'text-blue-400' },
    { name: 'Gmail', icon: <Mail className="w-7 h-7 text-red-500" />, url: 'https://mail.google.com', color: 'text-red-500' },
    { name: 'Meet', icon: <Video className="w-7 h-7 text-emerald-600" />, url: 'https://meet.google.com', color: 'text-emerald-600' },
    { name: 'Drive', icon: <HardDrive className="w-7 h-7 text-yellow-500" />, url: 'https://drive.google.com', color: 'text-yellow-500' },
    { name: 'Takvim', icon: <Calendar className="w-7 h-7 text-blue-600" />, url: 'https://calendar.google.com', color: 'text-blue-600' },
    { name: 'Çeviri', icon: <Languages className="w-7 h-7 text-blue-500" />, url: 'https://translate.google.com', color: 'text-blue-500' },
    { name: 'Fotoğraflar', icon: <ImageIcon className="w-7 h-7 text-red-400" />, url: 'https://photos.google.com', color: 'text-red-400' },
    { name: 'Dokümanlar', icon: <FileText className="w-7 h-7 text-blue-500" />, url: 'https://docs.google.com', color: 'text-blue-500' },
    { name: 'Chrome', icon: <Compass className="w-7 h-7 text-amber-500" />, url: 'https://google.com/chrome', color: 'text-amber-500' },
  ];

  return (
    <div
      ref={modalRef}
      className="absolute top-14 right-8 z-50 w-80 sm:w-84 max-h-[460px] overflow-y-auto bg-white dark:bg-[#303134] rounded-3xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700 animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 dark:border-gray-700">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2">
          Google Uygulamaları
        </span>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-2xl hover:bg-blue-50 dark:hover:bg-white/5 transition-colors group cursor-pointer text-center"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
              {app.icon}
            </div>
            <span className="text-[12px] text-gray-700 dark:text-gray-200 truncate w-full group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {app.name}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-center">
        <a
          href="https://about.google/products/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 px-6 rounded-full border border-gray-200 dark:border-gray-600 text-xs text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-white/5 transition-colors"
        >
          Diğer Google ürünleri
        </a>
      </div>
    </div>
  );
};
