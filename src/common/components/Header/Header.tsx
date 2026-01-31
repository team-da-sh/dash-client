import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcHeaderLogoSmallBlack from '@/shared/assets/svg/IcHeaderLogoSmallBlack';
import IcMypageBlack24 from '@/shared/assets/svg/IcMypageBlack24';
import IcSearchBlack24 from '@/shared/assets/svg/IcSearchBlack24';
import { isLoggedIn } from '@/shared/utils/authUtil';
import { headerStyle, buttonWrapperStyle } from './header.css';

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push(ROUTES_CONFIG.home.path);
  };

  const handleSearchClick = () => {
    router.push(ROUTES_CONFIG.search.path);
  };

  const handleMypageClick = () => {
    if (!isLoggedIn()) {
      router.push(ROUTES_CONFIG.login.path);
      return;
    }

    router.push(ROUTES_CONFIG.mypage.path);
  };

  return (
    <header className={headerStyle}>
      <button onClick={handleLogoClick} aria-label="홈으로 이동">
        <IcHeaderLogoSmallBlack width={58} height={20} />
      </button>
      <div className={buttonWrapperStyle}>
        <button onClick={handleSearchClick} aria-label="검색 페이지로 이동">
          <IcSearchBlack24 width={24} height={24} />
        </button>
        <button onClick={handleMypageClick} aria-label="마이페이지로 이동">
          <IcMypageBlack24 width={24} height={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
