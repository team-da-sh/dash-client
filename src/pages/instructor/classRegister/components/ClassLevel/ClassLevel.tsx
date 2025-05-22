import type { FieldError } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_LEVEL_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import Text from '@/shared/components/Text/Text';
import { LEVEL } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassLevelPropTypes {
  selectedLevel: string | null;
  toggleLevel: (title: string) => void;
}

const ClassLevel = ({ selectedLevel, toggleLevel }: ClassLevelPropTypes) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.selectedLevel as FieldError | undefined;

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        mb: 40,
      })}>
      <Description title="난이도" subTitle={CLASS_LEVEL_SUBTITLE} />

      <div
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          mt: 20,
        })}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            width: '100%',
          })}>
          {LEVEL.map((level) => (
            <LevelButton
              key={level.title}
              level={level}
              isSelected={selectedLevel === level.title}
              onClick={() => toggleLevel(level.title)}
              isError={!!error}
            />
          ))}
        </div>
        {error && (
          <div className={sprinkles({ mt: 4 })}>
            <Text tag="b3_r" color="alert3">
              {error.message}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassLevel;
