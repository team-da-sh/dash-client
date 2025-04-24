import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import { headStyle } from '@/shared/components/Head/head.css';

type HeadLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadTag =
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
  | 'b3_r';
type HeadColor =
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

export interface HeadProps extends ComponentPropsWithRef<'h1'> {
  level?: HeadLevel;
  tag?: HeadTag;
  color?: HeadColor;
}

const HeadTag = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

const Head = forwardRef<HTMLHeadingElement, HeadProps>(
  ({ level = 'h3', tag = 'h1_sb', color = 'black', className, ...props }, ref) => {
    const Tag = HeadTag[level];

    return (
      <Tag className={clsx(className, headStyle({ tag: tag, color: color }))} ref={ref} {...props}>
        {props.children}
      </Tag>
    );
  }
);

export default Head;
