import React from 'react';
import { GoogleAppsWaffleIcon } from './GoogleIcons';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAppsModal: () => void;
  onOpenProfileModal: () => void;
}

/**
 * Header Bileşeni (Üst Gezinme Çubuğu)
 * 
 * ÖDEV İSTERLERİ:
 * - "Üstteki alanı sağ tarafa alın" (flex justify-end)
 * - "fotoğrafı kendi fotoğrafınız ile değiştirin ve fotoğrafın kenarlarını yarıçap özelliği ile düzenleyiniz"
 *   (Enes Öztürk profil fotoğrafı border-radius: 50% ile yuvarlatıldı)
 */
export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenAppsModal,
  onOpenProfileModal,
}) => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 select-none text-[13px] text-[#202124] dark:text-[#e8eaed]">
      {/* Sol boş alan veya mobil gösterge */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-block text-xs text-[#5f6368] dark:text-[#9aa0a6]">
          Google Türkiye
        </span>
      </div>

      {/* 
        Ödev İsteri: Üst alanı sağ tarafa alma (justify-end, ml-auto)
        Sağ Gezinme Öğeleri: Gmail, Görseller, Tema Değiştirici, Uygulamalar Menüsü ve Profil Resmi
      */}
      <nav className="flex items-center gap-4 ml-auto">
        {/* Gmail Bağlantısı */}
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[13px] text-[#202124] dark:text-[#e8eaed] opacity-85 hover:opacity-100 transition-opacity"
        >
          Gmail
        </a>

        {/* Görseller Bağlantısı */}
        <a
          href="https://images.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[13px] text-[#202124] dark:text-[#e8eaed] opacity-85 hover:opacity-100 transition-opacity"
        >
          Görseller
        </a>

        {/* Koyu / Açık Tema Değiştirme Butonu */}
        <button
          onClick={onToggleDarkMode}
          title={darkMode ? 'Açık temaya geç' : 'Koyu temaya geç'}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[#5f6368] dark:text-[#9aa0a6] transition-colors"
          aria-label="Temayı Değiştir"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        {/* Google Apps (9-nokta Waffle Menüsü) */}
        <button
          onClick={onOpenAppsModal}
          title="Google Uygulamaları"
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[#5f6368] dark:text-[#9aa0a6] transition-colors"
          aria-label="Google Uygulamaları"
        >
          <GoogleAppsWaffleIcon className="w-5 h-5" />
        </button>

        {/* 
          Ödev İsteri: "fotoğrafı kendi fotoğrafınız ile değiştirin ve fotoğrafın kenarlarını yarıçap özelliği ile düzenleyiniz"
          Enes Öztürk Profil Fotoğrafı / Avatarı
          - border-radius: 50% (rounded-full)
          - hover: scale ve halka efekti
        */}
        <div className="relative">
          <button
            onClick={onOpenProfileModal}
            className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 hover:ring-4 hover:ring-black/5 dark:hover:ring-white/10 transition-all overflow-hidden cursor-pointer"
            title="Google Hesabı: Enes Öztürk (enes.ozturk@example.com)"
            aria-label="Enes Öztürk Profil Kartı"
          >
            {/* Özel Enes Öztürk Tasarım Avatarı */}
            <div className="w-full h-full bg-gradient-to-tr from-[#1a73e8] to-[#4285f4] flex items-center justify-center text-white font-semibold text-xs shadow-inner">
              <span>EÖ</span>
            </div>
            
            {/* İsteğe bağlı görsel katmanı */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Enes Öztürk Profil Fotoğrafı"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Eğer harici resim yüklenmezse şık "EÖ" harfli avatar fallback kalır
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
