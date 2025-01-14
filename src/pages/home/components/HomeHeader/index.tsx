import { containerStyle } from '@/pages/home/components/HomeHeader/index.css';
import IcLogoSmallWhite from '@/assets/svg/ic_logo_small_white.svg?react';
import IcSearchWhite from '@/assets/svg/ic_search_white_24.svg?react';

interface HomeHeaderProps {}

const HomeHeader = ({}: HomeHeaderProps) => {
  return (
    <header className={containerStyle}>
      <IcLogoSmallWhite />
      <IcSearchWhite />
    </header>
  );
};

export default HomeHeader;
