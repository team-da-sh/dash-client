import { containerStyle, iconsStyle } from '@/pages/home/components/HomeHeader/index.css';
import { IcLogoSmallWhite, IcSearchWhite24 } from '@/assets/svg';

interface HomeHeaderProps {
  isVisible: boolean;
}

const HomeHeader = ({ isVisible }: HomeHeaderProps) => {
  console.log('header에서', isVisible);
  return (
    <header className={containerStyle({ isVisible })}>
      <IcLogoSmallWhite width={54} height={18} />
      <div className={iconsStyle}>
        <IcSearchWhite24 width={24} height={24} />
        <IcSearchWhite24 width={24} height={24} />
      </div>
    </header>
  );
};

export default HomeHeader;
