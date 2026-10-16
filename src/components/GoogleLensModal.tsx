import React, { useState } from 'react';
import { X, Upload, Link2, Image as ImageIcon } from 'lucide-react';
import { GoogleLensIcon } from './GoogleIcons';

interface GoogleLensModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchImage: (query: string) => void;
}

/**
 * Google Lens (Görselle Arama) Modalı
 * Kullanıcı görsel yükleyebilir, bağlantı yapıştırabilir veya hazır örnekleri seçebilir
 */
export const GoogleLensModal: React.FC<GoogleLensModalProps> = ({
  isOpen,
  onClose,
  onSearchImage,
}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      onSearchImage(`Görsel Araması: ${imageUrl.trim()}`);
      onClose();
    }
  };

  const handleSampleClick = (name: string) => {
    onSearchImage(`Google Lens Sonucu: ${name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#303134] rounded-3xl w-full max-w-xl p-8 shadow-2xl relative border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in-95 duration-200">
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <GoogleLensIcon size={28} />
          <div>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100">
              Google Lens ile görsel arayın
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Görseldeki nesneleri, binaları veya metinleri aramak için görsel ekleyin
            </p>
          </div>
        </div>

        {/* Sürükle Bırak / Yükle Alanı */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const files = e.dataTransfer.files;
            if (files && files[0]) {
              handleSampleClick(files[0].name);
            }
          }}
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors my-4 flex flex-col items-center justify-center cursor-pointer ${
            isDragging
              ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20'
              : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 bg-gray-50/50 dark:bg-black/20'
          }`}
          onClick={() => {
            const fileInput = document.getElementById('lens-file-input');
            fileInput?.click();
          }}
        >
          <input
            id="lens-file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleSampleClick(e.target.files[0].name);
              }
            }}
          />
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
            <Upload size={24} />
          </div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Bir görseli buraya sürükleyin ya da <span className="text-blue-600 dark:text-blue-400 underline">dosya yükleyin</span>
          </p>
          <span className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP desteklenir</span>
        </div>

        {/* Resim Bağlantısı Yapıştır Formu */}
        <div className="my-4">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400">VEYA</span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
          </div>

          <form onSubmit={handleUrlSubmit} className="flex gap-2 mt-2">
            <div className="relative flex-1">
              <Link2 size={16} className="absolute left-3.5 top-3 text-gray-400" />
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Görsel bağlantısı yapıştırın (URL)..."
                className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Ara
            </button>
          </form>
        </div>

        {/* Popüler Görsel Örnekleri */}
        <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 block mb-2">Hızlı görsel örnekleri:</span>
          <div className="flex flex-wrap gap-2">
            {[
              'Galata Kulesi, İstanbul',
              'Anıtkabir, Ankara',
              'Kapadokya Balonları',
              'Kutup Ayısı Doğal Yaşamı',
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSampleClick(item)}
                className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
              >
                📸 {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
