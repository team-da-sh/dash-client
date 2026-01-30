import type { Metadata } from 'next';
import Script from 'next/script';
import '@/shared/styles/index.css';

/* eslint-disable react-refresh/only-export-components -- Next.js layout metadata */
export const metadata: Metadata = {
  title: 'da-sh.kr',
  description: '당신에게 춤을 더 가까이, 꿈꾸던 댄스 클래스를 만나다',
  openGraph: {
    title: 'dash',
    description: '당신에게 춤을 더 가까이, 꿈꾸던 댄스 클래스를 만나다',
    type: 'website',
    url: 'https://www.da-sh.kr/',
    images: ['/dash-Thumbnail.png'],
  },
  metadataBase: new URL('https://www.da-sh.kr/'),
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=no',
  other: { 'format-detection': 'no' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        {children}
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,'clarity','script','tw3shhhgdn');
            `,
          }}
        />
      </body>
    </html>
  );
}
