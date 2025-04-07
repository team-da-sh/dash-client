import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/homeHeader.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcMypageBlack24 from '@/shared/assets/svg/IcMypageBlack24';
import IcMypageWhite24 from '@/shared/assets/svg/IcMypageWhite24';
import IcSearchBlack24 from '@/shared/assets/svg/IcSearchBlack24';
import IcSearchWhite24 from '@/shared/assets/svg/IcSearchWhite24';
import { HomeBlackWepm, HomeWhiteWepm } from '@/shared/assets/webm';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface HomeHeaderPropTypes {
  isWhite: boolean;
  onMyPageClick: () => void;
}

const HomeHeader = ({ isWhite, onMyPageClick }: HomeHeaderPropTypes) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(ROUTES_CONFIG.search.path);
  };

  const handleLogoClick = () => {
    // eslint-disable-next-line no-self-assign
    location.href = location.href;
  };

  return (
    <header className={containerStyle({ isWhite })}>
      {isWhite ? (
        <>
          <div>
            <video src={HomeBlackWepm} width={106} height={45} autoPlay muted loop onClick={handleLogoClick}>
              <source type="video/webm" />
            </video>
          </div>
          <div className={sprinkles({ display: 'flex', gap: 20 })}>
            <IcSearchBlack24 width={24} height={24} onClick={handleSearchClick} />
            <IcMypageBlack24 width={24} height={24} onClick={onMyPageClick} />
          </div>
        </>
      ) : (
        <>
          <div>
            <video src={HomeWhiteWepm} width={106} height={45} autoPlay muted loop onClick={handleLogoClick}>
              <source type="video/webm" />
            </video>
          </div>
          <div className={sprinkles({ display: 'flex', gap: 20 })}>
            <IcSearchWhite24 width={24} height={24} onClick={handleSearchClick} />
            <IcMypageWhite24 width={24} height={24} onClick={onMyPageClick} />
          </div>
        </>
      )}
    </header>
  );
};

export default HomeHeader;
