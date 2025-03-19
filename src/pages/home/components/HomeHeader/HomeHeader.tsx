import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/homeHeader.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcMypageBlack24 from '@/shared/assets/svg/IcMypageBlack24';
import IcMypageWhite24 from '@/shared/assets/svg/IcMypageWhite24';
import IcSearchBlack24 from '@/shared/assets/svg/IcSearchBlack24';
import IcSearchWhite24 from '@/shared/assets/svg/IcSearchWhite24';
import { HomeBlackWepm, HomeWhiteWepm } from '@/shared/assets/webm';
import Flex from '@/shared/components/Flex/Flex';

interface HomeHeaderProps {
  isVisible: boolean;
  onMyPageClick: () => void;
}

const HomeHeader = ({ isVisible, onMyPageClick }: HomeHeaderProps) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(ROUTES_CONFIG.search.path);
  };

  const handleLogoClick = () => {
    location.href = location.href;
  };

  return (
    <Flex tag="header" className={containerStyle({ isVisible })}>
      {isVisible ? (
        <>
          <div>
            <video src={HomeBlackWepm} width={106} height={45} autoPlay muted loop onClick={handleLogoClick}>
              <source type="video/webm" />
            </video>
          </div>
          <Flex gap="2rem">
            <IcSearchBlack24 width={24} height={24} onClick={handleSearchClick} />
            <IcMypageBlack24 width={24} height={24} onClick={onMyPageClick} />
          </Flex>
        </>
      ) : (
        <>
          <div>
            <video src={HomeWhiteWepm} width={106} height={45} autoPlay muted loop onClick={handleLogoClick}>
              <source type="video/webm" />
            </video>
          </div>
          <Flex gap="2rem">
            <IcSearchWhite24 width={24} height={24} onClick={handleSearchClick} />
            <IcMypageWhite24 width={24} height={24} onClick={onMyPageClick} />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default HomeHeader;
