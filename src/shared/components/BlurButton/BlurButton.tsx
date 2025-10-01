import { fixedContainerStyle, blurCapStyle, wrapperStyle } from '@/shared/components/BlurButton/BlurButton.css';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface BlurButtonPropTypes {
  blurColor?: 'gray' | 'white';
  children: ReactNode;
  className?: string;
}

const BlurButton = ({ blurColor = 'gray', children, className }: BlurButtonPropTypes) => {
  return (
    <div className={fixedContainerStyle({ blurBase: blurColor })}>
      <div aria-hidden className={blurCapStyle[blurColor]} />
      <div className={clsx(wrapperStyle, className)}>{children}</div>
    </div>
  );
};

export default BlurButton;
