/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ============================================================================
 * GOOGLE ANA SAYFASINI TASARLAMAK — ENES ÖZTÜRK
 * ============================================================================
 * Kodluyoruz & Patika.dev CSS Modülü Bitirme Projesi
 * Geliştirici & Tasarımcı: Enes Öztürk
 * 
 * Bu projede modern Google ana sayfası; piksel hassasiyeti, esnek kutu modeli (Flexbox),
 * sınır yarıçapı (border-radius), gölgelendirmeler (box-shadow) ve interaktif
 * bileşenler (Sesle Arama, Google Lens, Google Apps Çekmecesi, Karanlık Mod)
 * ile eksiksiz olarak kodlanmıştır.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
  GoogleLogo,
  GoogleMicIcon,
  GoogleLensIcon,
  GoogleSearchIcon,
} from './components/GoogleIcons';
import { GoogleAppsModal } from './components/GoogleAppsModal';
import { ProfileModal } from './components/ProfileModal';
import { VoiceSearchModal } from './components/VoiceSearchModal';
import { GoogleLensModal } from './components/GoogleLensModal';
import { SettingsModal } from './components/SettingsModal';
import { SearchResultsView } from './components/SearchResultsView';
import { DoodleModal } from './components/DoodleModal';
import { History, TrendingUp, X } from 'lucide-react';

export default function App() {
  // Arama metni ve durum değişkenleri
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeSearchResult, setActiveSearchResult] = useState<string | null>(null);

  // Tema durumu (Açık / Koyu Tema)
  const [darkMode, setDarkMode] = useState(false);

  // Dil seçimi (Türkçe / English)
  const [currentLang, setCurrentLang] = useState<'tr' | 'en'>('tr');

  // Açılır pencere (modal) durumları
  const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isLensModalOpen, setIsLensModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isDoodleModalOpen, setIsDoodleModalOpen] = useState(false);

  const searchBoxRef = useRef<HTMLDivElement>(null);

  // Karanlık tema sınıfını html/body köküne uygulama
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Arama önerileri kutusunun dışına tıklandığında kapanması
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Popüler ve geçmiş arama önerileri
  const suggestions = [
    { text: 'enes öztürk frontend developer', type: 'trending' },
    { text: 'google ana sayfası tasarlamak css', type: 'recent' },
    { text: 'patika dev frontend web geliştirme', type: 'trending' },
    { text: 'css flexbox ve border-radius özellikleri', type: 'recent' },
    { text: 'modern web tasarımı ve react dersleri', type: 'trending' },
  ];

  // Arama formunun gönderilmesi
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      setActiveSearchResult(searchQuery.trim());
      setIsFocused(false);
    }
  };

  // "Kendimi Şanslı Hissediyorum" butonu tıklaması
  const handleFeelingLucky = () => {
    setIsDoodleModalOpen(true);
  };

  // Eğer kullanıcı arama yaptıysa arama sonuçları sayfasını göster
  if (activeSearchResult) {
    return (
      <SearchResultsView
        query={activeSearchResult}
        onBackToHome={() => setActiveSearchResult(null)}
        onSearchAgain={(newQ) => setActiveSearchResult(newQ)}
        onOpenVoiceSearch={() => setIsVoiceModalOpen(true)}
        onOpenLens={() => setIsLensModalOpen(true)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#202124] text-[#202124] dark:text-[#e8eaed] transition-colors duration-200">
      {/* 
        ========================================================================
        1. BÖLÜM: ÜST GEZİNME ALANI (HEADER)
        ========================================================================
        ÖDEV İSTERLERİ:
        - "Üstteki alanı sağ tarafa alın" (Header içinde ml-auto / justify-end ile sağa yaslandı)
        - "Fotoğrafı kendi fotoğrafınız ile değiştirin ve fotoğrafın kenarlarını yarıçap özelliği ile düzenleyiniz"
          (Enes Öztürk profil fotoğrafı border-radius: 50% ile yuvarlatıldı)
      */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenAppsModal={() => setIsAppsModalOpen(!isAppsModalOpen)}
        onOpenProfileModal={() => setIsProfileModalOpen(!isProfileModalOpen)}
      />

      {/* Açılır Modallar (Waffle Uygulamalar, Profil ve Ayarlar) */}
      <GoogleAppsModal
        isOpen={isAppsModalOpen}
        onClose={() => setIsAppsModalOpen(false)}
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* 
        ========================================================================
        2. BÖLÜM: ORTA ALAN (LOGO, ARAMA ÇUBUĞU VE BUTONLAR)
        ========================================================================
      */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 w-full -mt-14 sm:-mt-20">
        {/* 
          Ödev İsteri: "Fark ettiyseniz logo eski bir Google logosu. Bu logoyu günümüzdeki logo ile değiştirmelisiniz."
          Güncel 4 Renkli Modern Google Logosu
        */}
        <div className="mb-6 sm:mb-8 select-none transition-transform hover:scale-[1.01]">
          <GoogleLogo width={272} height={92} className="h-[75px] sm:h-[92px] w-auto" />
        </div>

        {/* 
          Ödev İsteri: 
          - "Arama yapılacak alanın kenarlarını yarıçap özelliği ile düzenleyiniz." (border-radius: 24px)
          - "Arama alanında yazı yazılan yerin genişliği 480px olmalı ve kenarlığı olmamalı." (width: 480px, border: none)
          - "Arama simgesi gibi sesle arama simgesini de siz ekleyin."
        */}
        <div ref={searchBoxRef} className="relative w-full max-w-[584px] px-2">
          <form
            onSubmit={handleSearchSubmit}
            className={`w-full flex items-center bg-white dark:bg-[#202124] border border-[#dfe1e5] dark:border-[#5f6368] transition-all px-4 py-2.5 ${
              isFocused
                ? 'rounded-t-[24px] shadow-[0_1px_6px_rgba(32,33,36,0.28)] dark:shadow-[0_1px_6px_rgba(0,0,0,0.5)] border-transparent dark:border-transparent'
                : 'rounded-full hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] dark:hover:shadow-[0_1px_6px_rgba(0,0,0,0.5)] hover:border-transparent dark:hover:border-transparent'
            }`}
          >
            {/* Sol Tarafta Büyüteç Arama Simgesi */}
            <div className="mr-3 text-[#9aa0a6] flex items-center justify-center">
              <GoogleSearchIcon size={20} />
            </div>

            {/* 
              Ödev İsteri:
              - Genişlik: 480px (w-[480px])
              - Kenarlık: Olmamalı (border-none, outline-none)
            */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder=""
              autoComplete="off"
              className="google-search-input flex-1"
              aria-label="Google'da Arayın veya bir URL yazın"
            />

            {/* Temizleme Butonu (X) */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mr-2 transition-colors"
                title="Aramayı temizle"
              >
                <X size={18} />
              </button>
            )}

            {/* Sağ Taraf Simgeleri: Sesle Arama ve Google Lens */}
            <div className="flex items-center gap-3 pl-1">
              {/* Sesle Arama Simgesi */}
              <button
                type="button"
                onClick={() => setIsVoiceModalOpen(true)}
                title="Sesle arama yapın"
                className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Sesle arama"
              >
                <GoogleMicIcon size={24} />
              </button>

              {/* Google Lens (Görselle Arama) Simgesi */}
              <button
                type="button"
                onClick={() => setIsLensModalOpen(true)}
                title="Görselle arama yapın"
                className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Görselle arama"
              >
                <GoogleLensIcon size={24} />
              </button>
            </div>
          </form>

          {/* 
            Arama Otomatik Tamamlama ve Geçmiş Önerileri Açılır Kutusu
          */}
          {isFocused && (
            <div className="absolute left-2 right-2 top-full bg-white dark:bg-[#202124] rounded-b-[24px] shadow-[0_4px_6px_rgba(32,33,36,0.28)] dark:shadow-[0_4px_6px_rgba(0,0,0,0.6)] border-t border-gray-100 dark:border-gray-700/60 z-40 py-2">
              <ul className="list-none m-0 p-0 text-sm">
                {suggestions.map((item, idx) => (
                  <li
                    key={idx}
                    onMouseDown={() => {
                      setSearchQuery(item.text);
                      setActiveSearchResult(item.text);
                      setIsFocused(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#f1f3f4] dark:hover:bg-[#303134] cursor-pointer text-[#202124] dark:text-[#e8eaed]"
                  >
                    {item.type === 'recent' ? (
                      <History size={16} className="text-[#9aa0a6] shrink-0" />
                    ) : (
                      <TrendingUp size={16} className="text-[#9aa0a6] shrink-0" />
                    )}
                    <span className="truncate flex-1">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Öneriler Kutusunun Altındaki Hızlı Butonlar */}
              <div className="flex justify-center items-center gap-3 pt-3 pb-1 border-t border-gray-100 dark:border-gray-800 mt-2">
                <button
                  type="button"
                  onMouseDown={() => handleSearchSubmit()}
                  className="google-btn text-xs px-4"
                >
                  Google'da Ara
                </button>
                <button
                  type="button"
                  onMouseDown={handleFeelingLucky}
                  className="google-btn text-xs px-4"
                >
                  Kendimi Şanslı Hissediyorum
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 
          ======================================================================
          3. BÖLÜM: AKSİYON BUTONLARI (GOOGLE'DA ARA & KENDİMİ ŞANSLI HİSSEDİYORUM)
          ======================================================================
          ÖDEV İSTERLERİ:
          - "Buttonları ortaya alıp üstünden ve sağından boşluklar veriniz."
            (flex justify-center, margin-top: 18px / mt-7, birinci butonda margin-right: 12px / mr-3)
          - "Button kenarları 1px kalın #f2f2f2 renginde olmalı." (border: 1px solid #f2f2f2)
          - "Yazı tipi Arial, yazı rengi #5f6368, yazı boyutu 14px olmalı."
            (font-family: Arial, color: #5f6368, font-size: 14px)
          - "Button yüksekliği 36px olmalı." (height: 36px)
          - "Buttonlara aynı arama alanında olduğu gibi gölge veriniz."
            (box-shadow: 0 1px 1px rgba(0,0,0,.08), hover: box-shadow: 0 1px 3px rgba(32,33,36,.2))
        */}
        <div className="flex justify-center items-center mt-7 select-none">
          {/* Birinci Buton: Google'da Ara (Sağından boşluk: mr-3) */}
          <button
            type="button"
            onClick={() => handleSearchSubmit()}
            className="google-btn mr-3"
            aria-label="Google'da Ara"
          >
            Google'da Ara
          </button>

          {/* İkinci Buton: Kendimi Şanslı Hissediyorum */}
          <button
            type="button"
            onClick={handleFeelingLucky}
            className="google-btn"
            aria-label="Kendimi Şanslı Hissediyorum"
          >
            Kendimi Şanslı Hissediyorum
          </button>
        </div>

        {/* 
          Google Çoklu Dil Seçeneği
        */}
        <div className="mt-7 text-xs text-[#5f6368] dark:text-[#9aa0a6] text-center">
          <span>Google şu dillerde sunuluyor: </span>
          {currentLang === 'tr' ? (
            <button
              onClick={() => setCurrentLang('en')}
              className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer ml-1"
            >
              English
            </button>
          ) : (
            <button
              onClick={() => setCurrentLang('tr')}
              className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer ml-1"
            >
              Türkçe
            </button>
          )}
        </div>
      </main>

      {/* 
        ========================================================================
        4. BÖLÜM: FOOTER (ALT BİLGİ ALANI)
        ========================================================================
        ÖDEV İSTERLERİ:
        - "Footerda arkaplan rengini #f2f2f2 yapınız ve liste noktalarını ortadan kaldırın."
        - "enes öztürk imzasıyla yap"
      */}
      <Footer
        onOpenSettings={() => setIsSettingsModalOpen(!isSettingsModalOpen)}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Sesle Arama ve Google Lens Modalları */}
      <VoiceSearchModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onSelectQuery={(query) => {
          setSearchQuery(query);
          setActiveSearchResult(query);
        }}
      />
      <GoogleLensModal
        isOpen={isLensModalOpen}
        onClose={() => setIsLensModalOpen(false)}
        onSearchImage={(query) => {
          setSearchQuery(query);
          setActiveSearchResult(query);
        }}
      />
      <DoodleModal
        isOpen={isDoodleModalOpen}
        onClose={() => setIsDoodleModalOpen(false)}
      />
    </div>
  );
}
