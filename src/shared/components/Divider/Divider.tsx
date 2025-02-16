import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { dividerStyle } from '@/shared/components/Divider/divider.css';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';

  color?:
    | 'main1'
    | 'main2'
    | 'main3'
    | 'main4'
    | 'main5'
    | 'main6'
    | 'sub1'
    | 'sub2'
    | 'sub3'
    | 'sub4'
    | 'sub5'
    | 'sub6'
    | 'sub7'
    | 'alert1'
    | 'alert2'
    | 'alert3'
    | 'kakao1'
    | 'kakao2'
    | 'black70'
    | 'white50'
    | 'white'
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'gray6'
    | 'gray7'
    | 'gray8'
    | 'gray9'
    | 'gray10'
    | 'gray11'
    | 'black';
  length?: string | number;
  thickness?: string | number;
}

const Divider = ({
  direction = 'horizontal',
  color = 'gray4',
  length = '100%',
  thickness = '0.1rem',
  className,
}: DividerProps) => {
  const sizeStyle =
    direction === 'horizontal' ? { width: length, height: thickness } : { height: length, width: thickness };
  return <div className={clsx(className, dividerStyle({ direction, color }))} style={sizeStyle} />;
};

export default Divider;
