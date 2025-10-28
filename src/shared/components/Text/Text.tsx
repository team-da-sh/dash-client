import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { textStyle } from '@/shared/components/Text/text.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span';
  tag?:
    | 'h1_sb'
    | 'h3_sb'
    | 'h5_sb'
    | 'h5_m'
    | 'h6_sb'
    | 'b1_sb_long'
    | 'b1_sb'
    | 'b2_sb_long'
    | 'b2_sb'
    | 'b2_m_long'
    | 'b2_m'
    | 'b2_r'
    | 'b3_sb_narrow'
    | 'b3_sb'
    | 'b3_m_narrow'
    | 'b3_m'
    | 'b3_r'
    | 'c1_sb'
    | 'c1_m'
    | 'c1_r_narrow'
    | 'c1_r';
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

const Text = ({ as = 'p', tag = 'b1_sb_long', color = 'black', children, className, ...props }: TextProps) => {
  const Tag = as;

  return (
    <Tag className={clsx(className, textStyle({ tag, color }))} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
