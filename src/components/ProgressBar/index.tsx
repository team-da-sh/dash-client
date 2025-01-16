import * as styles from '@/components/ProgressBar/index.css';

interface ProgressBarProps {
  totalStep: number;
  currentStep: number;
}

const ProgressBar = ({ totalStep, currentStep }: ProgressBarProps) => {
  return (
    <div className={styles.progressBarWrapperStyle}>
      {[...Array(totalStep)].map((_, index) => {
        const isActive = index + 1 === Math.min(currentStep, totalStep);
        return <div key={index} className={styles.progressBarSegmentStyle({ isActive })} />;
      })}
    </div>
  );
};

export default ProgressBar;
