import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { tagStyle } from '@/components/Tag/index.css';

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  size?: 'small' | 'medium' | 'large' | 'thumbnail' | 'mypage';
  type?: 'genre' | 'level' | 'search' | 'deadline';
  hasAuth?: boolean;
}

const Tag = ({ size, type, children, hasAuth, className, ...props }: TagProps) => {
  return (
    <div className={clsx(className, tagStyle({ size, type, hasAuth }))} {...props}>
      {children}
    </div>
  );
};

export default Tag;
