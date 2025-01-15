import { PropsWithChildren } from 'react';
import * as styles from './index.css';

type CardProps = PropsWithChildren<{}>;

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
