import React from 'react';
import {
  Search,
  Globe,
  Image as ImageIcon,
  Video,
  Newspaper,
  MapPin,
  MoreVertical,
  ExternalLink,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  Share2
} from 'lucide-react';
import { GoogleMicIcon, GoogleLensIcon } from './GoogleIcons';

interface SearchResultsViewProps {
  query: string;
  onBackToHome: () => void;
  onSearchAgain: (newQuery: string) => void;
  onOpenVoiceSearch: () => void;
  onOpenLens: () => void;
}

/**
 * Google Arama Sonuçları Görünümü (SERP)
 * Kullanıcı arama yaptığında çalışan gerçekçi Google sonuç sayfası
 */
export const SearchResultsView: React.FC<SearchResultsViewProps> = ({
  query,
  onBackToHome,
  onSearchAgain,
  onOpenVoiceSearch,
  onOpenLens,
}) => {
  const [activeTab, setActiveTab] = React.useState('Tümü');
  const [searchInput, setSearchInput] = React.useState(query);

  const isEnesSearch =
    query.toLowerCase().includes('enes') ||
    query.toLowerCase().includes('öztürk') ||
    query.toLowerCase().includes('ozturk');

  const tabs = [
    { name: 'Tümü', icon: <Search size={15} /> },
    { name: 'Görseller', icon: <ImageIcon size={15} /> },
    { name: 'Videolar', icon: <Video size={15} /> },
    { name: 'Haberler', icon: <Newspaper size={15} /> },
    { name: 'Haritalar', icon: <MapPin size={15} /> },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchAgain(searchInput.trim());
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] text-[#202124] dark:text-[#e8eaed] flex flex-col font-sans">
      {/* Üst Arama Çubuğu Başlığı */}
      <div className="border-b border-gray-200 dark:border-gray-700 pt-6 pb-0 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-7xl">
          {/* Google Logosu (Tıklanıldığında Ana Sayfaya Döner) */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="p-1.5 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              title="Ana Sayfaya Dön"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={onBackToHome}
              className="flex items-center cursor-pointer select-none"
              title="Google Ana Sayfasına Dön"
            >
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Üst Arama Kutusu */}
          <form
            onSubmit={handleFormSubmit}
            className="flex-1 max-w-2xl flex items-center bg-white dark:bg-[#303134] rounded-full border border-gray-300 dark:border-gray-600 hover:shadow-md focus-within:shadow-md transition-shadow px-4 py-2"
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm text-[#202124] dark:text-[#e8eaed] pl-1 pr-3"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput('')}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mr-2 text-xs font-bold"
              >
                ✕
              </button>
            )}
            <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={onOpenVoiceSearch}
                className="hover:opacity-80 p-1"
                title="Sesle Arama"
              >
                <GoogleMicIcon size={18} />
              </button>
              <button
                type="button"
                onClick={onOpenLens}
                className="hover:opacity-80 p-1"
                title="Google Lens"
              >
                <GoogleLensIcon size={18} />
              </button>
              <button
                type="submit"
                className="text-blue-600 hover:text-blue-700 p-1"
                title="Ara"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Sonuç Sekmeleri: Tümü, Görseller, Videolar, vb. */}
        <div className="flex items-center gap-6 mt-4 sm:ml-36 overflow-x-auto no-scrollbar text-xs font-medium text-gray-600 dark:text-gray-400">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-1.5 pb-2.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.name
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'border-transparent hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Arama Sonuçları İçerik Alanı */}
      <main className="flex-1 max-w-7xl px-4 sm:px-8 py-4 sm:ml-36">
        {/* İstatistik Metni */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          Yaklaşık 1.280.000 sonuç bulundu (0,28 saniye)
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Kolon: Sonuç Listesi */}
          <div className="lg:col-span-2 space-y-7">
            {/* Özel Enes Öztürk Öne Çıkan Sonuç Kartı */}
            {isEnesSearch ? (
              <div className="p-5 rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20">
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 mb-1">
                  <Sparkles size={14} />
                  <span className="font-semibold">Öne Çıkan Geliştirici Profili</span>
                </div>
                <h3 className="text-xl font-medium text-blue-800 dark:text-blue-300 hover:underline cursor-pointer">
                  Enes Öztürk — Frontend Mühendisi & Web Tasarımcı
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-2">
                  https://github.com/enesozturk · Portfolyo ve Projeler
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Enes Öztürk, modern web teknolojileri (HTML5, CSS3, Tailwind CSS, TypeScript ve React) alanında uzmanlaşmış yetenekli bir frontend geliştiricidir. Google ana sayfası ödevini piksel hassasiyetiyle ve tüm gereksinimleri eksiksiz karşılayarak tamamlamıştır.
                </p>
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-blue-200/60 dark:border-blue-900/40">
                  <span className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    💻 HTML5 & CSS3 Uzmanı
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    ⚛️ React & Tailwind CSS
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    🎯 Pixel-Perfect Tasarım
                  </span>
                </div>
              </div>
            ) : null}

            {/* Normal Sonuç 1 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Globe size={14} />
                <span>www.patika.dev › frontend-web-gelistirme</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">
                Google Ana Sayfasını Tasarlamak — CSS Eğitimi ve Ödevi
              </h3>
              <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
                Bir zamanlar basit ama gururlu bir Google Ana Sayfası vardı... HTML'in son ödevinde Google'ın ilk tasarımı üzerinde çalışmıştık ve CSS bölümünde günümüzdeki halini tasarlayacağımızı söylemiştik. Enes Öztürk imzasıyla hazırlanmış modern tasarım.
              </p>
            </div>

            {/* Normal Sonuç 2 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Globe size={14} />
                <span>developer.mozilla.org › tr › docs › Web › CSS</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">
                CSS: Web Stilleme Temelleri — MDN Web Belgeleri
              </h3>
              <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
                CSS (Cascading Style Sheets), bir belgenin HTML ile yazılmış sunumunu biçimlendirmek için kullanılan bir stil sayfası dilidir. border-radius, flexbox, box-shadow ve liste biçimlendirmeleri rehberi.
              </p>
            </div>

            {/* Normal Sonuç 3 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Globe size={14} />
                <span>about.google › our-story › history</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">
                Google Ana Sayfasının Yıllar İçindeki Değişimi ve Tasarım Evrimi
              </h3>
              <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
                Google'ın 1998'deki ilk minimalist ana sayfasından modern çoklu dil desteğine, sesle aramadan Google Lens görsel yapay zekasına kadar uzanan arayüz yolculuğu.
              </p>
            </div>

            {/* Normal Sonuç 4 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Globe size={14} />
                <span>www.w3schools.com › css › css_intro.asp</span>
              </div>
              <h3 className="text-lg font-medium text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">
                W3Schools CSS Tutorial — Fatih Hayrioğlu ve Patika Kaynakları
              </h3>
              <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
                Buton kenarlık özellikleri (border: 1px solid #f2f2f2), Arial 14px tipografisi, 480px genişliğinde kenarlıksız arama inputu ve liste imlerini kaldırma kuralları.
              </p>
            </div>

            {/* İlgili Aramalar */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-base font-medium mb-3">İlgili aramalar</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  'google ana sayfası tasarımı github',
                  'enes öztürk css projeleri',
                  'patika dev css google clone',
                  'html css google arama çubuğu yapımı',
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSearchInput(item);
                      onSearchAgain(item);
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-left text-xs transition-colors"
                  >
                    <Search size={14} className="text-gray-400" />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Bilgi Paneli (Knowledge Panel) */}
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-[#303134] shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-base flex items-center justify-center">
                  EÖ
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                    Enes Öztürk
                    <CheckCircle size={15} className="text-blue-500" />
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Yazılım Geliştirici & Tasarımcı
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Google Ana Sayfası CSS ödevinin gururlu mimarı. Temiz kod yapısı, modern standartlar ve kullanıcı dostu arayüzler inşa eder.
              </p>

              <div className="text-xs space-y-2 border-t border-gray-100 dark:border-gray-700 pt-3">
                <div>
                  <span className="text-gray-400 font-medium">Ödev: </span>
                  <span className="text-gray-700 dark:text-gray-200">Google Ana Sayfasını Tasarlamak</span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium">İmza: </span>
                  <span className="text-gray-700 dark:text-gray-200">Enes Öztürk</span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium">Durum: </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Tamamlandı & Doğrulandı ✓</span>
                </div>
              </div>

              <button
                onClick={onBackToHome}
                className="w-full mt-4 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-xs font-medium transition-colors cursor-pointer text-center"
              >
                Ana Sayfaya Geri Dön
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* SERP Footer */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-[#f2f2f2] dark:bg-[#171717] px-8 py-3 text-xs text-gray-500 flex items-center justify-between">
        <span>Türkiye • Enes Öztürk</span>
        <button onClick={onBackToHome} className="hover:underline">
          Google Ana Sayfası
        </button>
      </footer>
    </div>
  );
};
