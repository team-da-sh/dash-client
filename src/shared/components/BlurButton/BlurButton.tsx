import { fixedContainerStyle, blurCapStyle, wrapperStyle } from '@/shared/components/BlurButton/BlurButton.css';
import { ReactNode } from 'react';

interface BlurButtonProps {
  blurColor?: 'gray' | 'white';
  children: ReactNode;
}

const BlurBotton = ({ blurColor = 'gray', children }: BlurButtonProps) => {
  return (
    <div className={fixedContainerStyle({ blurBase: blurColor })}>
      <div aria-hidden className={blurCapStyle[blurColor]} />
      <div className={wrapperStyle}>{children}</div>
    </div>
  );
};

export default BlurBotton;
