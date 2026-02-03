'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import Providers from '@/app/Providers';
import Header from '@/common/components/Header/Header';
import ModalProvider from '@/common/components/Modal/ModalProvider';
import '@/shared/styles/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isSearchPath = pathname === '/search';
  const isOnboardingPath = pathname === '/onboarding';
  const isReservationPath = pathname?.startsWith('/reservation/');
  const isWithdrawPath = pathname === '/mypage/withdraw';

  const shouldShowHeader = !isSearchPath && !isOnboardingPath && !isReservationPath && !isWithdrawPath;

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
        <div id="root">
          <Providers>
            {shouldShowHeader && <Header />}
            {children}
            <ModalProvider />
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
