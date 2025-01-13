import * as styles from './index.css';

type ProgressBarProps = {
  totalSteps: number;
  currentStep: number;
};

const ProgressBar = ({ totalSteps, currentStep }: ProgressBarProps) => {
  const displayedStep = Math.min(currentStep, totalSteps);

  return (
    <div className={styles.progressBarWrapper}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={styles.progressBarSegment({
            isActive: index + 1 === displayedStep,
          })}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
