import React from 'react';
import { X, Sparkles, ExternalLink, Heart } from 'lucide-react';

interface DoodleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * "Kendimi Şanslı Hissediyorum" (I'm Feeling Lucky) Doodles Modalı
 * Google'ın ikonik Doodle arşivini ve Enes Öztürk özel Doodle'ını sunar
 */
export const DoodleModal: React.FC<DoodleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const doodles = [
    {
      title: 'Enes Öztürk — Google Ana Sayfası CSS Mezuniyeti',
      date: 'Bugün',
      description: 'HTML ve CSS eğitimini üstün başarıyla tamamlayan Enes Öztürk için hazırlanan kutlama Doodle tasarımı.',
      image: '🎉 💻 🚀 🎨 🌐',
      badge: 'Özel Doodle',
    },
    {
      title: 'Barış Manço’nun 70. Doğum Günü',
      date: '2 Ocak',
      description: 'Türk müziğinin efsanevi ismi, 7’den 77’ye herkesin sevgilisi Barış Manço anısına Google logosu.',
      image: '🎸 🎶 🌟 🎤 🌈',
      badge: 'Türkiye Arşivi',
    },
    {
      title: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı',
      date: '23 Nisan',
      description: 'Dünyadaki tüm çocuklara armağan edilmiş bayram için rengarenk Google Doodle tasarımı.',
      image: '🇹🇷 🎈 🎈 👧 👦',
      badge: 'Resmi Bayram',
    },
    {
      title: 'Aşık Veysel’in 123. Doğum Günü',
      date: '25 Ekim',
      description: 'Türk halk ozanı, usta saz ve söz şairi Aşık Veysel anısına hazırlanan özel görsel.',
      image: '🪕 🌾 🎶 🍂 📜',
      badge: 'Kültür Mirası',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#303134] rounded-3xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl relative border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Sparkles size={22} />
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
              Kendimi Şanslı Hissediyorum: Google Doodles
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Google'ın tarihi günleri ve kahramanları kutlayan özel logoları
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {doodles.map((doodle, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all bg-gray-50/50 dark:bg-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    {doodle.badge}
                  </span>
                  <span className="text-xs text-gray-400">{doodle.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {doodle.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  {doodle.description}
                </p>
              </div>

              <div className="text-2xl p-3 bg-white dark:bg-gray-800 rounded-xl shadow-inner border border-gray-100 dark:border-gray-700 tracking-widest select-none">
                {doodle.image}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            Enes Öztürk tasarımıyla sevgiyle hazırlandı <Heart size={14} className="text-red-500 fill-red-500" />
          </span>
          <a
            href="https://doodles.google/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
          >
            Tüm Google Doodle Arşivi <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
