import { dividerStyle } from '@/components/Divider/index.css';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary';
  length?: string | number;
}
const Divider = ({ direction = 'horizontal', color = 'primary', length = '100%' }: DividerProps) => {
  const sizeStyle = direction === 'horizontal' ? { width: length || '100%' } : { height: length || '100%' };
  return <div className={dividerStyle({ direction, color })} style={sizeStyle} />;
};

export default Divider;
