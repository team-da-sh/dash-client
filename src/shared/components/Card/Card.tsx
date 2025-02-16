import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { cardStyle } from '@/shared/components/Card/card.css';

type CardProps = ComponentProps<'div'>;

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={clsx(className, cardStyle)} {...props}>
      {children}
    </div>
  );
};

export default Card;
