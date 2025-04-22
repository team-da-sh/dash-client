import Head from '@/shared/components/Head/Head';
import {
  headCustomStyle,
  levelButtonStyle,
  onboardingLevelButtonStyle,
} from '@/shared/components/LevelButton/levelButton.css';
import Text from '@/shared/components/Text/Text';

interface LevelButtonProps {
  level: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
  isSelected: boolean | null;
  onClick: () => void;
}

const LevelButton = ({ level, isSelected, onClick }: LevelButtonProps) => {
  return (
    <button
      className={isSelected === null ? onboardingLevelButtonStyle : levelButtonStyle({ selected: isSelected })}
      onClick={onClick}
      type="button">
      {level.icon}
      <Head className={headCustomStyle} tag="b1_sb" level="h6" color={isSelected ? 'white' : 'gray9'}>
        {level.title}
      </Head>
      <Text tag="b3_m_narrow" color={isSelected ? 'gray2' : 'gray9'}>
        {level.description}
      </Text>
    </button>
  );
};

export default LevelButton;
