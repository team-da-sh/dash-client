import { fixedContainerStyle, blurCapStyle, wrapperStyle } from '@/shared/components/BlurButton/BlurButton.css';
import { ReactNode } from 'react';

interface BlurButtonPropTypes {
  blurColor?: 'gray' | 'white';
  children: ReactNode;
}

const BlurBotton = ({ blurColor = 'gray', children }: BlurButtonPropTypes) => {
  return (
    <div className={fixedContainerStyle({ blurBase: blurColor })}>
      <div aria-hidden className={blurCapStyle[blurColor]} />
      <div className={wrapperStyle}>{children}</div>
    </div>
  );
};

export default BlurBotton;
