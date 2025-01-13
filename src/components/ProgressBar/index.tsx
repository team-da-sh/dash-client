import * as styles from './index.css';

interface ProgressBarProps {
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ totalStep, currentStep }: ProgressBarProps) => {
  return (
    <div className={styles.progressBarWrapper}>
      {[...Array(totalStep)].map((_, index) => {
        const isActive = index + 1 === Math.min(currentStep, totalStep);
        return <div key={index} className={styles.progressBarSegment({ isActive })} />;
      })}
    </div>
  );
};

export default ProgressBar;
