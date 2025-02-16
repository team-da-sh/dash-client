import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import * as styles from '@/shared/components/ProgressBar/progressBar.css';

interface ProgressBarProps extends ComponentPropsWithoutRef<'div'> {
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
