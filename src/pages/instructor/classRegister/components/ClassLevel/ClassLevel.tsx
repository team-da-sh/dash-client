import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_LEVEL_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import Flex from '@/shared/components/Flex/Flex';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import { LEVEL } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassLevelPropTypes {
  selectedLevel: string | null;
  toggleLevel: (title: string) => void;
}

const ClassLevel = ({ selectedLevel, toggleLevel }: ClassLevelPropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 40,
      })}>
      <Description title="난이도" subTitle={CLASS_LEVEL_SUBTITLE} />
      <Flex direction="column" gap="0.8rem" width="100%">
        {LEVEL.map((level) => (
          <LevelButton
            key={level.title}
            level={level}
            isSelected={selectedLevel === level.title}
            onClick={() => toggleLevel(level.title)}
          />
        ))}
      </Flex>
    </div>
  );
};

export default ClassLevel;
