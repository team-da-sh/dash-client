import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
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
}

const HomeHeader = ({ isVisible }: HomeHeaderProps) => {
  console.log('header에서', isVisible);
  return (
    <Flex tag="header" className={containerStyle({ isVisible })}>
      {isVisible ? (
        <>
          <IcLogoSmallBlack width={54} height={18} />
          <Flex gap="2rem">
            <IcSearchBlack24 width={24} height={24} />
            <IcMypageBlack24 width={24} height={24} />
          </Flex>
        </>
      ) : (
        <>
          <IcLogoSmallWhite width={54} height={18} />
          <Flex gap="2rem">
            <IcSearchWhite24 width={24} height={24} />
            <IcMypageWhite24 width={24} height={24} />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default HomeHeader;
