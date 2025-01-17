import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { dividerStyle } from '@/components/Divider/index.css';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary' | 'tertiary';

  length?: string | number;
  thickness?: string | number;
}

const Divider = ({
  direction = 'horizontal',
  color = 'primary',
  length = '100%',
  thickness = '0.1rem',
  className,
}: DividerProps) => {
  const sizeStyle =
    direction === 'horizontal' ? { width: length, height: thickness } : { height: length, width: thickness };
  return <div className={clsx(className, dividerStyle({ direction, color }))} style={sizeStyle} />;
};

export default Divider;
