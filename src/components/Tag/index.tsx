import { ComponentPropsWithoutRef } from 'react';
import { tagStyle } from '@/components/Tag/index.css';

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  size: 'small' | 'medium' | 'large' | 'thumbnail';
  type: 'genre' | 'level' | 'search' | 'deadline';
}

const Tag = ({ size, type, children, ...props }: TagProps) => {
  return (
    <div className={tagStyle({ size, type })} {...props}>
      {children}
    </div>
  );
};

export default Tag;
