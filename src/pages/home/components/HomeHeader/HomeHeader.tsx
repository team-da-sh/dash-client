import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/homeHeader.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { HomeBlack, HomeWhite } from '@/shared/assets/gif';
import { IcMypageBlack24, IcMypageWhite24, IcSearchBlack24, IcSearchWhite24 } from '@/shared/assets/svg';
import Flex from '@/shared/components/Flex';

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
          <img src={HomeBlack} width={106} height={45} onClick={handleLogoClick} />
          <Flex gap="2rem">
            <IcSearchBlack24 width={24} height={24} onClick={handleSearchClick} />
            <IcMypageBlack24 width={24} height={24} onClick={onMyPageClick} />
          </Flex>
        </>
      ) : (
        <>
          <img src={HomeWhite} width={106} height={45} onClick={handleLogoClick} />
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
