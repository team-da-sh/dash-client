import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import {
  headCustomStyle,
  levelButtonStyle,
  onboardingLevelButtonStyle,
} from '@/shared/components/LevelButton/levelButton.css';

interface LevelButtonProps {
  level: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
  isSelected: boolean | null;
  onClick: () => void;
  isError?: boolean;
}

const LevelButton = ({ level, isSelected, onClick, isError = false }: LevelButtonProps) => {
  return (
    <button
      className={
        isSelected === null ? onboardingLevelButtonStyle : levelButtonStyle({ selected: isSelected, error: isError })
      }
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
