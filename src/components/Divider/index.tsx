import { dividerStyle } from '@/components/Divider/index.css';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary';
  length?: string | number;
  thickness?: string | number;
}
const Divider = ({
  direction = 'horizontal',
  color = 'primary',
  length = '100%',
  thickness = '0.1rem',
}: DividerProps) => {
  const sizeStyle =
    direction === 'horizontal'
      ? { width: length || '100%', height: thickness }
      : { height: length || '100%', width: thickness };
  return <div className={dividerStyle({ direction, color })} style={sizeStyle} />;
};

export default Divider;
