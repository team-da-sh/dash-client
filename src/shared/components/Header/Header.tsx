import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcLogoSmallBlack from '@/shared/assets/svg/IcLogoSmallBlack';
import IcMypageBlack24 from '@/shared/assets/svg/IcMypageBlack24';
import IcSearchBlack24 from '@/shared/assets/svg/IcSearchBlack24';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { isLoggedIn } from '@/shared/utils/authUtil';
import { headerStyle } from './header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  const handleSearchClick = () => {
    navigate(ROUTES_CONFIG.search.path);
  };

  const handleMypageClick = () => {
    if (!isLoggedIn()) {
      navigate(ROUTES_CONFIG.login.path);
      return;
    }

    navigate(ROUTES_CONFIG.mypage.path);
  };

  return (
    <header className={headerStyle}>
      <button onClick={handleLogoClick} aria-label="홈으로 이동">
        <IcLogoSmallBlack width={58} height={20} />
      </button>
      <div className={sprinkles({ display: 'flex', gap: 20 })}>
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
