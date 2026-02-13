'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';
import IcMypageBlack24 from '@/shared/assets/svg/IcMypageBlack24';
import IcSearchBlack24 from '@/shared/assets/svg/IcSearchBlack24';
import { headerStyle, buttonWrapperStyle } from './header.css';

const ROUTES_WITHOUT_HEADER = ['/search', '/onboarding', '/my/withdraw', '/reservation/'] as const;
const ROUTE_PATTERNS_WITHOUT_HEADER = [/^\/class\/[^/]+\/register$/] as const;

const Header = () => {
  const pathname = usePathname();

  const shouldHide =
    ROUTES_WITHOUT_HEADER.some((route) => pathname?.startsWith(route)) ||
    ROUTE_PATTERNS_WITHOUT_HEADER.some((pattern) => pattern.test(pathname ?? ''));

  if (shouldHide) return null;

  return (
    <header className={headerStyle}>
      <Link href="/" aria-label="홈으로 이동">
        <IcHeaderLogoSmallBlack width={58} height={20} />
      </Link>
      <div className={buttonWrapperStyle}>
        <Link href="/search" aria-label="검색 페이지로 이동">
          <IcSearchBlack24 width={24} height={24} />
        </Link>
        <Link href="/my" aria-label="마이페이지로 이동" prefetch={false}>
          <IcMypageBlack24 width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
