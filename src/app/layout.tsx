import type { Metadata } from 'next';
import Script from 'next/script';
import Providers from '@/app/Providers';
import Header from '@/common/components/Header/Header';
import '@/shared/styles/index.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://da-sh.kr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DASH - 댄스 클래스 예약 플랫폼',
    template: '%s | DASH',
  },
  description:
    '원하는 댄스 클래스를 찾고, 예약하고, 춤추세요. 힙합, 팝핑, 왁킹, K-POP 등 다양한 장르의 댄스 클래스를 한눈에.',
  keywords: ['댄스 클래스', '댄스 수업', '댄스 예약', '힙합', '팝핑', '왁킹', 'K-POP', '브레이킹', 'DASH'],
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'DASH',
    title: 'DASH - 댄스 클래스 예약 플랫폼',
    description: '원하는 댄스 클래스를 찾고, 예약하고, 춤추세요.',
    images: [{ url: '/dash-Thumbnail.png', width: 1200, height: 630, alt: 'DASH 댄스 클래스 예약 플랫폼' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DASH - 댄스 클래스 예약 플랫폼',
    description: '원하는 댄스 클래스를 찾고, 예약하고, 춤추세요.',
    images: ['/dash-Thumbnail.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <div id="root">
          <Providers>
            <Header />
            {children}
          </Providers>
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
        </div>
      </body>
    </html>
  );
}
