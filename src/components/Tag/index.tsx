import { ComponentPropsWithRef } from 'react';
import { tagStyle } from '@/components/Tag/index.css';

interface TagProps extends ComponentPropsWithRef<'div'> {
  size: 'small' | 'medium' | 'thumbnail';
  type: 'genre' | 'level' | 'deadline';
}

const Tag = ({ size, type, children, ...props }: TagProps) => {
  return (
    <div className={tagStyle({ size, type })} {...props}>
      {children}
    </div>
  );
};

export default Tag;
