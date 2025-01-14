import { headStyle } from '@/components/Head/index.css';
import { ComponentPropsWithoutRef } from 'react';


type HeadLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';

export interface HeadProps extends ComponentPropsWithoutRef<'h1'> {
  level?: HeadLevel;
  tag?: HeadTag;
}

const HeadTag = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

const Head = ({ level = 'h3', tag = 'h3', ...props }: HeadProps) => {
  const Tag = HeadTag[level];

  return (
    <Tag className={headStyle({ tag: tag })} {...props}>
      {props.children}
    </Tag>
  );
};

export default Head;
