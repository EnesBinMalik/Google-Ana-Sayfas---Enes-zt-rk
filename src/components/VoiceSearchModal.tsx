import React, { useState, useEffect } from 'react';
import { X, Mic, Volume2 } from 'lucide-react';
import { GoogleMicIcon } from './GoogleIcons';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuery: (query: string) => void;
}

/**
 * Sesle Arama Modalı (Google Voice Search)
 * 
 * ÖDEV İSTERİ:
 * - "Arama simgesi gibi sesle arama simgesini de siz ekleyin."
 * - Bu modal, sesle arama simgesine tıklandığında Google'ın gerçekçi ses dinleme arayüzünü sunar.
 */
export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectQuery,
}) => {
  const [listening, setListening] = useState(true);
  const [recognizedText, setRecognizedText] = useState('');

  // Sesle arama açıldığında simülasyon veya Web Speech API tetiklenir
  useEffect(() => {
    if (isOpen) {
      setListening(true);
      setRecognizedText('');

      // Web Speech API kontrolü (destekleyen tarayıcılarda gerçek dinleme)
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          const recognition = new SpeechRecognition();
          recognition.lang = 'tr-TR';
          recognition.interimResults = true;
          recognition.maxAlternatives = 1;

          recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setRecognizedText(transcript);
            setTimeout(() => {
              onSelectQuery(transcript);
              onClose();
            }, 1000);
          };

          recognition.onerror = () => {
            setListening(false);
          };

          recognition.start();

          return () => {
            try {
              recognition.stop();
            } catch (e) {}
          };
        } catch (e) {
          // Fallback simülasyonu
        }
      }
    }
  }, [isOpen, onSelectQuery, onClose]);

  if (!isOpen) return null;

  const quickSamples = [
    'Enes Öztürk kimdir?',
    'Bugün hava durumu nasıl?',
    'Google ana sayfası css tasarımı',
    'Frontend geliştirici yol haritası',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#303134] rounded-3xl w-full max-w-lg p-8 shadow-2xl relative border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in-95 duration-200">
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Başlık Durumu */}
          <h2 className="text-2xl font-light text-gray-800 dark:text-gray-100 mb-2">
            {recognizedText ? `"${recognizedText}"` : 'Şimdi konuşun...'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Mikrofonunuza net bir şekilde aramak istediğiniz konuyu söyleyin
          </p>

          {/* Animasyonlu Google Ses Dalgaları */}
          <div className="relative flex items-center justify-center my-6">
            {/* Dış Nabız Efekti */}
            <div className="absolute w-32 h-32 rounded-full bg-red-500/10 dark:bg-red-500/20 animate-ping opacity-60" />
            
            {/* Ortadaki 4 Renkli Mikrofon Butonu */}
            <div className="relative w-24 h-24 rounded-full bg-white dark:bg-[#202124] shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center z-10">
              <GoogleMicIcon size={40} />
            </div>
          </div>

          {/* 4 Renkli Ses Seviyesi Çubukları */}
          <div className="flex items-center gap-2 h-10 my-4">
            <span className="w-1.5 h-6 bg-[#4285F4] rounded-full animate-wave-1" />
            <span className="w-1.5 h-10 bg-[#EA4335] rounded-full animate-wave-2" />
            <span className="w-1.5 h-7 bg-[#FBBC05] rounded-full animate-wave-3" />
            <span className="w-1.5 h-9 bg-[#34A853] rounded-full animate-wave-4" />
          </div>

          {/* Hızlı Örnekler Simülasyonu */}
          <div className="w-full mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-3">
              Veya ses örneğini tıklayarak test edin:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {quickSamples.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setRecognizedText(sample);
                    setTimeout(() => {
                      onSelectQuery(sample);
                      onClose();
                    }, 400);
                  }}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 transition-colors"
                >
                  "{sample}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
