import { ComponentPropsWithoutRef } from 'react';
import { headStyle } from './index.css';

type HeadType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadProps extends ComponentPropsWithoutRef<'h3'> {
  tag?: HeadType;
}

const HeadTag = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

const Head = ({ tag = 'h3', ...props }: HeadProps) => {
  const Tag = HeadTag[tag];

  return (
    <Tag className={headStyle({ tag: tag })} {...props}>
      {props.children}
    </Tag>
  );
};

export default Head;
