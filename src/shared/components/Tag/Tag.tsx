import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { tagStyle } from '@/shared/components/Tag/tag.css';

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  size?: 'small' | 'medium' | 'large' | 'thumbnail' | 'mypage' | 'search' | 'sort' | 'timeSelector';
  type?: 'genre' | 'level' | 'search' | 'deadline' | 'sort';
  hasAuth?: boolean;
  isSelected?: boolean;
}

const Tag = ({ size, type, children, hasAuth, isSelected, className, ...props }: TagProps) => {
  return (
    <div className={clsx(className, tagStyle({ size, type, hasAuth, isSelected }))} {...props}>
      {children}
    </div>
  );
};

export default Tag;
