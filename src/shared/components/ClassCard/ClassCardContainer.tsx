import * as styles from '@/shared/components/ClassCard/style.css';

interface ClassCardContainerPropTypes {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ClassCardContainer = ({ onClick, children }: ClassCardContainerPropTypes) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <div className={styles.cardContainerStyle} onClick={onClick} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
};

export default ClassCardContainer;
