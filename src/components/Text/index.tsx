import { HTMLAttributes } from 'react';
import { textStyle } from './index.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8' | 'b9' | 'b10' | 'c1' | 'c2' | 'c3' | 'c4';
}

const Text = ({ tag = 'b1', children, ...props }: TextProps) => {
  return (
    <p className={textStyle({ tag: tag })} {...props}>
      {children}
    </p>
  );
};

export default Text;
