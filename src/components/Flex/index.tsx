import clsx from 'clsx';
import { ElementType, HTMLAttributes } from 'react';
import { flexStyle } from '@/components/Flex/index.css';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  direction?: 'row' | 'column';
  align?: 'flexStart' | 'flexEnd' | 'center' | 'stretch' | 'baseline';
  justify?: 'flexStart' | 'flexEnd' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrapReverse';
  grow?: 'grow0' | 'grow1';
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderBottom?: string;
  borderTop?: string;
}

const Flex = ({
  tag = 'div',
  direction,
  align,
  justify,
  gap,
  wrap,
  grow,
  position,
  width,
  height,
  margin,
  padding,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  border,
  borderRadius,
  borderColor,
  borderWidth,
  borderBottom,
  borderTop,
  children,
  className,
  ...props
}: FlexProps) => {
  const Element = tag;

  const inlineStyles = {
    position,
    gap,
    width,
    height,
    margin,
    padding,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    border,
    borderRadius,
    borderColor,
    borderWidth,
    borderBottom,
    borderTop,
  };

  return (
    <Element
      className={clsx(
        className,
        flexStyle({
          direction,
          align,
          justify,
          wrap,
          grow,
        })
      )}
      style={inlineStyles}
      {...props}>
      {children}
    </Element>
  );
};

export default Flex;
