import type { FieldError } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Description from '@/app/my/(instructor)/create-class/components/Description';
import { CLASS_LEVEL_SUBTITLE } from '@/app/my/(instructor)/create-class/constants/registerSectionText';
import Text from '@/common/components/Text/Text';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import { LEVEL } from '@/shared/constants';

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
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '4rem' }}>
      <Description title="난이도" subTitle={CLASS_LEVEL_SUBTITLE} />

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
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
          <div style={{ marginTop: '0.4rem' }}>
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
