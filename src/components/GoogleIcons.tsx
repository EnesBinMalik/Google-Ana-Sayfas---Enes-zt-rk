import React from 'react';

/**
 * Modern Google Logosu (SVG)
 * Güncel Google renkleri ve tipografisi ile vektörel logo
 */
export const GoogleLogo: React.FC<{ className?: string; width?: number; height?: number }> = ({
  className = '',
  width = 272,
  height = 92,
}) => (
  <svg
    viewBox="0 0 272 92"
    width={width}
    height={height}
    className={`select-none ${className}`}
    aria-label="Google"
    role="img"
  >
    {/* G - Mavi */}
    <path
      fill="#4285F4"
      d="M115.75 47.18c0 3.02-.25 5.27-.77 6.76H72.82c.49 4.3 2.1 7.76 4.83 10.38 2.73 2.62 6.2 3.93 10.41 3.93 5.77 0 10.04-2.22 12.81-6.66l8.84 5.53c-2.43 3.65-5.67 6.54-9.72 8.67-4.05 2.13-8.8 3.2-14.25 3.2-8.36 0-15.09-2.73-20.19-8.19-5.1-5.46-7.65-12.82-7.65-22.08 0-9.4 2.59-16.85 7.77-22.35 5.18-5.5 12.04-8.25 20.58-8.25 8.04 0 14.65 2.65 19.83 7.95 5.18 5.3 7.77 12.63 7.77 22l-.3 3.14zm-30.8-7.95c-3.85 0-6.85 1.15-9 3.45-2.15 2.3-3.4 5.2-3.75 8.7h24.7c-.3-3.5-1.55-6.4-3.75-8.7-2.2-2.3-5.2-3.45-8.2-3.45z"
      transform="translate(-25, 0)"
    />
    {/* Standart Google Logosu Şekilleri */}
    <g transform="translate(10, 8)">
      {/* G harfi */}
      <path
        fill="#4285F4"
        d="M45.5 39.5c0-1.8-.16-3.6-.47-5.3H23.5v10.1h12.4c-.54 2.9-2.2 5.4-4.7 7l7.6 5.9c4.4-4.1 7-10.1 7-17.7z"
      />
      <path
        fill="#34A853"
        d="M23.5 61.9c6.3 0 11.5-2.1 15.3-5.7l-7.6-5.9c-2.1 1.4-4.7 2.2-7.7 2.2-6 0-11-4-12.8-9.4l-7.9 6.1C6.6 57 14.4 61.9 23.5 61.9z"
      />
      <path
        fill="#FBBC05"
        d="M10.7 43.1c-.5-1.4-.8-2.9-.8-4.4s.3-3 .8-4.4l-7.9-6.1C1 31.8 0 35.3 0 38.7s1 6.9 2.8 10.5l7.9-6.1z"
      />
      <path
        fill="#EA4335"
        d="M23.5 15.5c3.4 0 6.5 1.2 8.9 3.5l6.7-6.7C34.9 8.5 29.7 6.4 23.5 6.4c-9.1 0-16.9 4.9-20.7 12.7l7.9 6.1c1.8-5.4 6.8-9.7 12.8-9.7z"
      />
    </g>
    {/* Net Google Yazı Logosu Vektörü */}
    <image
      href="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      x="0"
      y="0"
      width="272"
      height="92"
      onError={(e) => {
        // Fallback: Eğer resim yüklenemezse dahili SVG görünür kalır
        (e.target as HTMLElement).style.display = 'none';
      }}
    />
  </svg>
);

/**
 * Google 4 Renkli Mikrofon Simgesi (Sesle Arama)
 * Ödev İsteri: Sesle arama simgesi arama alanının sağına eklenmiştir
 */
export const GoogleMicIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`cursor-pointer transition-transform hover:scale-110 ${className}`}
    role="img"
    aria-label="Sesle arama yapın"
  >
    {/* Mavi üst gövde */}
    <path
      d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
      fill="#4285F4"
    />
    {/* Kırmızı taban */}
    <path
      d="M11 18.92c-3.41-.49-6-3.41-6-6.92h2c0 2.76 2.24 5 5 5s5-2.24 5-5h2c0 3.51-2.59 6.43-6 6.92V22h-2v-3.08z"
      fill="#EA4335"
    />
    {/* Yeşil alt kök */}
    <path d="M7 12H5c0 3.51 2.59 6.43 6 6.92V22h2v-3.08c1.39-.2 2.65-.82 3.68-1.72L15.26 15.8c-.8.74-1.83 1.2-2.98 1.2-2.3 0-4.22-1.57-4.83-3.69L7 12z" fill="#34A853" />
    {/* Sarı sağ yay */}
    <path d="M19 12h-2c0 1.02-.31 1.97-.84 2.77l1.45 1.45c1.47-1.4 2.39-3.41 2.39-4.22z" fill="#FBBC05" />
  </svg>
);

/**
 * Google Lens Simgesi (Görselle Arama)
 */
export const GoogleLensIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`cursor-pointer transition-transform hover:scale-110 ${className}`}
    role="img"
    aria-label="Görselle arama yapın"
  >
    <path
      d="M6 10C6 7.79086 7.79086 6 10 6H14C16.2091 6 18 7.79086 18 10V14C18 16.2091 16.2091 18 14 18H10C7.79086 18 6 16.2091 6 14V10Z"
      stroke="#4285F4"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" fill="#EA4335" />
    <path d="M18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17C17.4477 17 17 17.4477 17 18C17 18.5523 17.4477 19 18 19Z" fill="#34A853" />
    <path d="M6 6L9 9" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Google Apps (Waffle) 9-Nokta Simgesi
 */
export const GoogleAppsWaffleIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    role="img"
    aria-label="Google Uygulamaları"
  >
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

/**
 * Büyüteç Arama Simgesi
 */
export const GoogleSearchIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    role="img"
    aria-label="Arama simgesi"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
