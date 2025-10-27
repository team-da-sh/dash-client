import clsx from 'clsx';
import type { ReactNode } from 'react';
import { fixedContainerStyle, blurCapStyle, wrapperStyle } from '@/shared/components/BlurButton/BlurButton.css';

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
