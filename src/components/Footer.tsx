import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenSettings: () => void;
  onOpenProfile: () => void;
}

/**
 * Footer Bileşeni
 * 
 * ÖDEV İSTERLERİ:
 * - "Footerda arkaplan rengini #f2f2f2 yapınız ve liste noktalarını ortadan kaldırın."
 *   (bg-[#f2f2f2] / .google-footer, list-none p-0 m-0)
 * - "enes öztürk imzasıyla yap"
 *   (Özenli Enes Öztürk imza rozeti ve geliştirici bilgisi)
 */
export const Footer: React.FC<FooterProps> = ({ onOpenSettings, onOpenProfile }) => {
  return (
    <footer className="google-footer mt-auto border-t border-gray-200 dark:border-gray-800 text-[14px] text-[#70757a] dark:text-[#9aa0a6] select-none">
      {/* 
        Üst Satır: Konum bilgisi (Türkiye)
      */}
      <div className="px-6 py-3 border-b border-gray-300/60 dark:border-gray-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#202124] dark:text-[#e8eaed] font-medium">Türkiye</span>
          <span className="text-xs text-gray-400">• Konum geçmişinize göre</span>
        </div>

        {/* Enes Öztürk İmza Rozeti */}
        <button
          onClick={onOpenProfile}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-black/30 text-xs font-medium text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700 hover:shadow-xs transition-all cursor-pointer"
          title="Tasarım ve Kodlama: Enes Öztürk"
        >
          <Code2 size={13} />
          <span>Geliştirici: Enes Öztürk</span>
          <Sparkles size={12} className="text-amber-500" />
        </button>
      </div>

      {/* 
        Alt Satır: İki yana yaslı gezinme bağlantıları
        Ödev İsteri: Liste noktaları ortadan kaldırıldı (list-none, ul p-0 m-0)
      */}
      <div className="px-6 py-3 flex flex-wrap items-center justify-between gap-y-3">
        {/* Sol Taraf Bağlantıları: Hakkında, Reklam, İşletme, Arama Nasıl Çalışır */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 list-none m-0 p-0">
          <li>
            <a
              href="https://about.google"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              Hakkında
            </a>
          </li>
          <li>
            <a
              href="https://ads.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              Reklam
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              İşletme
            </a>
          </li>
          <li>
            <a
              href="https://google.com/search/howsearchworks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              Arama Nasıl Çalışır?
            </a>
          </li>
        </ul>

        {/* Sağ Taraf Bağlantıları: Gizlilik, Şartlar, Ayarlar */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 list-none m-0 p-0">
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              Gizlilik
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              Şartlar
            </a>
          </li>
          <li>
            <button
              onClick={onOpenSettings}
              className="hover:underline cursor-pointer text-[#70757a] dark:text-[#9aa0a6]"
            >
              Ayarlar
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};
