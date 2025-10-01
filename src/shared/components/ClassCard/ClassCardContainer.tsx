import * as styles from '@/shared/components/ClassCard/style.css';

interface ClassCardContainerPropTypes {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ClassCardContainer = ({ onClick, children }: ClassCardContainerPropTypes) => {
  return (
    <div className={styles.cardContainerStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default ClassCardContainer;
