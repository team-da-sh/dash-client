import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/shared/components/Flex/Flex';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import { LEVEL } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassLevelPropTypes {
  selectedLevelTitle: string | null;
  handleLevelSelect: (title: string) => void;
}

const ClassLevel = ({ selectedLevelTitle, handleLevelSelect }: ClassLevelPropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 40,
      })}>
      <Description title="난이도" subTitle="클래스에 해당하는 난이도를 골라주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        {LEVEL.map((level) => (
          <LevelButton
            key={level.title}
            level={level}
            isSelected={selectedLevelTitle === level.title}
            onClick={() => handleLevelSelect(level.title)}
          />
        ))}
      </Flex>
    </div>
  );
};

export default ClassLevel;
