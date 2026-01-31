'use client';

import clsx from 'clsx';
import type { ComponentProps } from 'react';
import * as styles from '@/app/class/[id]/components/Card/card.css';

type CardPropTypes = ComponentProps<'div'>;

const Card = ({ children, className, ...props }: CardPropTypes) => {
  return (
    <div className={clsx(styles.cardStyle, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
