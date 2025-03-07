import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { textStyle } from '@/shared/components/Text/text.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8' | 'b9' | 'b10' | 'c1' | 'c2' | 'c3' | 'c4';
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
}

const Text = ({ tag = 'b1', color = 'black', children, className, ...props }: TextProps) => {
  return (
    <p className={clsx(className, textStyle({ tag, color }))} {...props}>
      {children}
    </p>
  );
};

export default Text;
