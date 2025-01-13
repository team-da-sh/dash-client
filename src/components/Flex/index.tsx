import { ElementType, HTMLAttributes } from 'react';
import { flex } from './index.css';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  direction?: 'row' | 'column';
  align?: 'flexStart' | 'flexEnd' | 'center' | 'stretch' | 'baseline';
  justify?: 'flexStart' | 'flexEnd' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
  wrap?: 'nowrap' | 'wrap' | 'wrapReverse';
  gap?: string | number;
  grow?: 'grow0' | 'grow1';
}

const Flex = ({
  tag: Component = 'div',
  direction,
  align,
  justify,
  wrap,
  gap,
  grow,
  children,
  ...props
}: FlexProps) => {
  return (
    <Component
      className={flex({ direction, align, justify, wrap, grow })}
      style={{ gap, ...props.style }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Flex;
