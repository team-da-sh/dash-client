import { ForwardedRef, forwardRef } from 'react';
import { containerStyle, iconsStyle } from '@/pages/home/components/HomeHeader/index.css';
import { IcLogoSmallWhite, IcSearchWhite24 } from '@/assets/svg';

interface HomeHeaderProps {}

const HomeHeader = forwardRef(({}: HomeHeaderProps, ref: ForwardedRef<HTMLHeadElement>) => {
  return (
    <header ref={ref} className={containerStyle}>
      <IcLogoSmallWhite width={54} height={18} />
      <div className={iconsStyle}>
        <IcSearchWhite24 width={24} height={24} />
        <IcSearchWhite24 width={24} height={24} />
      </div>
    </header>
  );
});

export default HomeHeader;
