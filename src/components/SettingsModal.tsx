import React, { useRef, useEffect } from 'react';
import { Sliders, Search, History, HelpCircle, Moon, MessageSquare, Shield } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

/**
 * Footer "Ayarlar" Açılır Menüsü
 */
export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onToggleDarkMode,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  return (
    <div
      ref={menuRef}
      className="absolute bottom-12 right-6 z-50 w-64 bg-white dark:bg-[#303134] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 text-sm text-[#202124] dark:text-[#e8eaed] animate-in fade-in slide-in-from-bottom-2 duration-150"
    >
      <a
        href="https://www.google.com/preferences"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <Sliders size={16} className="text-gray-500" />
        <span>Arama ayarları</span>
      </a>

      <a
        href="https://www.google.com/advanced_search"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <Search size={16} className="text-gray-500" />
        <span>Gelişmiş arama</span>
      </a>

      <a
        href="https://myactivity.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <History size={16} className="text-gray-500" />
        <span>Arama geçmişiniz</span>
      </a>

      <a
        href="https://support.google.com/websearch"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <HelpCircle size={16} className="text-gray-500" />
        <span>Arama yardımı</span>
      </a>

      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        <Shield size={16} className="text-gray-500" />
        <span>Gizlilik verileri</span>
      </a>

      <div className="border-t border-gray-200 dark:border-gray-700 my-1" />

      {/* Koyu Tema Aç/Kapa Hızlı Anahtarı */}
      <button
        onClick={() => {
          onToggleDarkMode();
        }}
        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Moon size={16} className="text-gray-500" />
          <span>Koyu tema:</span>
        </div>
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
          {darkMode ? 'Açık' : 'Kapalı'}
        </span>
      </button>

      <button
        onClick={() => {
          alert('Google Ana Sayfa tasarım geri bildiriminiz için teşekkürler! (Enes Öztürk)');
          onClose();
        }}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer text-left"
      >
        <MessageSquare size={16} className="text-gray-500" />
        <span>Geri bildirim gönder</span>
      </button>
    </div>
  );
};
