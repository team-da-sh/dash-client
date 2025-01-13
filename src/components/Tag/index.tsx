import { ComponentPropsWithRef } from 'react';
import { tag } from '@/components/Tag/index.css';

interface TagProps extends ComponentPropsWithRef<'div'> {
  size: 'small' | 'medium' | 'thumbnail';
  type: 'genre' | 'level' | 'deadline';
}

const Tag = ({ size, type, children, ...props }: TagProps) => {
  return (
    <div className={tag({ size, type })} {...props}>
      {children}
    </div>
  );
};

export default Tag;
