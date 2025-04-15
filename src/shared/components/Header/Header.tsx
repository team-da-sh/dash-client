import { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPage from '@/pages/home/components/MyPage/MyPage';
import { overlayActiveStyle, overlayStyle } from '@/pages/home/home.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcLogoSmallBlack from '@/shared/assets/svg/IcLogoSmallBlack';
import IcMypageBlack24 from '@/shared/assets/svg/IcMypageBlack24';
import IcSearchBlack24 from '@/shared/assets/svg/IcSearchBlack24';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { isLoggedIn } from '@/shared/utils/authUtil';
import { headerStyle } from './header.css';

const Header = () => {
  const navigate = useNavigate();
  const [showMyPage, setShowMyPage] = useState(false);

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
    setShowMyPage(!showMyPage);
    // navigate(ROUTES_CONFIG.mypage.path); -> mypage 페이지화 작업되면 적용 예정
  };

  const handleCloseMyPageClick = () => {
    setShowMyPage(false);
  };

  return (
    <header className={headerStyle}>
      <div className={`${overlayStyle} ${showMyPage ? overlayActiveStyle : ''}`} />
      {showMyPage && (
        <Suspense fallback={<div />}>
          <MyPage showMyPage={showMyPage} onClose={handleCloseMyPageClick} />
        </Suspense>
      )}
      <IcLogoSmallBlack width={58} height={20} onClick={handleLogoClick} />
      <div className={sprinkles({ display: 'flex', gap: 20 })}>
        <IcSearchBlack24 width={24} height={24} onClick={handleSearchClick} />
        <IcMypageBlack24 width={24} height={24} onClick={handleMypageClick} />
      </div>
    </header>
  );
};

export default Header;
