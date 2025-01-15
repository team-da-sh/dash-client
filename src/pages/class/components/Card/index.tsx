import { PropsWithChildren } from 'react';
import { cardStyle } from '@/pages/class/components/Card/index.css';

type CardProps = PropsWithChildren<{}>;

const Card = ({ children }: CardProps) => {
  return <div className={cardStyle}>{children}</div>;
};

export default Card;
