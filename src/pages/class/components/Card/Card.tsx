import type { ComponentProps } from 'react';
import * as styles from '@/pages/class/components/Card/card.css';

type CardPropTypes = ComponentProps<'div'>;

const Card = ({ children, ...props }: CardPropTypes) => {
  return (
    <div className={styles.cardStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
