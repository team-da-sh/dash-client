import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import * as styles from '@/components/ProgressBar/index.css';

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ totalStep, currentStep, className }: ProgressBarProps) => {
  return (
    <div className={clsx(className, styles.progressBarWrapperStyle)}>
      {[...Array(totalStep)].map((_, index) => {
        const isActive = index + 1 === Math.min(currentStep, totalStep);
        return <div key={index} className={styles.progressBarSegmentStyle({ isActive })} />;
      })}
    </div>
  );
};

export default ProgressBar;
