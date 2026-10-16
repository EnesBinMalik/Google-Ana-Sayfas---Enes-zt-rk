import React, { useRef, useEffect } from 'react';
import { UserCheck, LogOut, UserPlus, Settings, ExternalLink, X, ShieldCheck } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Enes Öztürk - Google Hesap Kartı Modalı
 * 
 * ÖDEV İSTERLERİ:
 * - "fotoğrafı kendi fotoğrafınız ile değiştirin ve fotoğrafın kenarlarını yarıçap özelliği ile düzenleyiniz"
 * - "enes öztürk imzasıyla yap"
 */
export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={modalRef}
      className="absolute top-14 right-6 z-50 w-88 bg-white dark:bg-[#2d2e30] rounded-3xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 text-[#202124] dark:text-[#e8eaed] animate-in fade-in zoom-in-95 duration-150"
    >
      {/* Üst Kapatma ve E-posta */}
      <div className="flex items-center justify-between pb-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
        <span>enes.ozturk@example.com</span>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Profil Resmi & İsim Alanı */}
      <div className="flex flex-col items-center text-center mt-2 mb-5">
        {/* Yuvarlatılmış Profil Resmi (border-radius: 50%) */}
        <div className="relative w-20 h-20 rounded-full border-2 border-blue-500/30 p-0.5 shadow-md overflow-hidden bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white text-2xl font-bold">
          <span>EÖ</span>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80"
            alt="Enes Öztürk"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white flex items-center gap-1.5">
          Enes Öztürk
          <span title="Doğrulanmış Geliştirici">
            <ShieldCheck size={18} className="text-blue-500" />
          </span>
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Frontend Web Geliştirici & Tasarımcı
        </p>

        {/* Google Hesabınızı Yönetin Butonu */}
        <a
          href="https://myaccount.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1.5"
        >
          <Settings size={14} />
          Google Hesabınızı yönetin
        </a>
      </div>

      {/* Ek Bilgi / İmza Kartı */}
      <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-3 mb-4 text-xs text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-800">
        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
          🎓 Kodluyoruz & Patika CSS Ödevi
        </p>
        <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
          Bu proje, modern Google ana sayfası standartları ve piksel hassasiyeti gözetilerek <strong>Enes Öztürk</strong> imzasıyla geliştirilmiştir.
        </p>
      </div>

      {/* Alt Aksiyonlar */}
      <div className="space-y-1 pt-2 border-t border-gray-100 dark:border-gray-700 text-xs">
        <button
          onClick={() => alert('Başka bir hesap ekleme penceresi simülasyonu')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-200 transition-colors cursor-pointer"
        >
          <UserPlus size={16} className="text-gray-500" />
          <span>Başka bir hesap ekle</span>
        </button>

        <button
          onClick={() => alert('Oturum kapatma simülasyonu')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-200 transition-colors cursor-pointer"
        >
          <LogOut size={16} className="text-gray-500" />
          <span>Tüm hesapların oturumunu kapat</span>
        </button>
      </div>

      {/* En Alt Gizlilik ve Şartlar */}
      <div className="flex items-center justify-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Gizlilik Politikası
        </a>
        <span>•</span>
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Hizmet Şartları
        </a>
      </div>
    </div>
  );
};
