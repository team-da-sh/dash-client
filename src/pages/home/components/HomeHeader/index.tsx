import { containerStyle, iconsStyle } from '@/pages/home/components/HomeHeader/index.css';
import Flex from '@/components/Flex';
import { IcLogoSmallWhite, IcSearchWhite24 } from '@/assets/svg';

interface HomeHeaderProps {
  isVisible: boolean;
}

const HomeHeader = ({ isVisible }: HomeHeaderProps) => {
  console.log('header에서', isVisible);
  return (
    <Flex tag="header" className={containerStyle({ isVisible })}>
      <IcLogoSmallWhite width={54} height={18} />
      <Flex gap="60">
        <IcSearchWhite24 width={24} height={24} />
        <IcSearchWhite24 width={24} height={24} />
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
