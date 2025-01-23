import { useNavigate } from 'react-router-dom';
import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import {
  IcLogoSmallBlack,
  IcLogoSmallWhite,
  IcMypageBlack24,
  IcMypageWhite24,
  IcSearchBlack24,
  IcSearchWhite24,
} from '@/assets/svg';

interface HomeHeaderProps {
  isVisible: boolean;
  onMyPageClick: () => void;
}

const HomeHeader = ({ isVisible, onMyPageClick }: HomeHeaderProps) => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate(ROUTES_CONFIG.search.path);
  };
  return (
    <Flex tag="header" className={containerStyle({ isVisible })}>
      {isVisible ? (
        <>
          <IcLogoSmallBlack width={54} height={18} />
          <Flex gap="2rem">
            <IcSearchBlack24 width={24} height={24} onClick={handleSearchClick} />
            <IcMypageBlack24 width={24} height={24} onClick={onMyPageClick} />
          </Flex>
        </>
      ) : (
        <>
          <IcLogoSmallWhite width={54} height={18} />
          <Flex gap="2rem">
            <IcSearchWhite24 width={24} height={24} />
            <IcMypageWhite24 width={24} height={24} onClick={onMyPageClick} />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default HomeHeader;
