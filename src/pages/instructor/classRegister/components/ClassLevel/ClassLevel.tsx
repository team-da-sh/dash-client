import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/shared/components/Flex/Flex';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import { LEVEL } from '@/shared/constants';

interface ClassLevelProps {
  selectedLevelTitle: string | null;
  handleLevelSelect: (title: string) => void;
}

const ClassLevel = ({ selectedLevelTitle, handleLevelSelect }: ClassLevelProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
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
    </Flex>
  );
};

export default ClassLevel;
