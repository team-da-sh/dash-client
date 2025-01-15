import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { tagStyle } from '@/components/Tag/index.css';

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  size: 'small' | 'medium' | 'large' | 'thumbnail';
  type: 'genre' | 'level' | 'search' | 'deadline';
}

const Tag = ({ size, type, children, className, ...props }: TagProps) => {
  return (
    <div className={clsx(className, tagStyle({ size, type }))} {...props}>
      {children}
    </div>
  );
};

export default Tag;
