import * as styles from './Tag.css';

interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
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
