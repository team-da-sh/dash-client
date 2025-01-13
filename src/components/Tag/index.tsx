import { ComponentPropsWithRef } from 'react';
import * as styles from '@/components/Tag/index.css';

interface TagProps extends ComponentPropsWithRef<'div'> {
  size: 'small' | 'medium' | 'thumbnail';
  type: 'genre' | 'level' | 'deadline';
}

const Tag = ({ size, type, children, ...props }: TagProps) => {
  return (
    <div className={`${styles.tagBase} ${styles.tagTypeStyles[type]} ${styles.tagSizeStyles[size]}`} {...props}>
      {children}
    </div>
  );
};

export default Tag;
