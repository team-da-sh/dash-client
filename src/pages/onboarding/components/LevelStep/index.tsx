import { INFO_KEY, LEVELS } from '@/pages/onboarding/constants';
import { KO_LEVELS, onboardInfoTypes } from '@/pages/onboarding/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import LevelButton from '@/components/LevelButton';
import Text from '@/components/Text';
import { LEVEL } from '@/shared/constants';

interface LevelStepProps {
  level: string | null;
  name: string;
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
}

const LevelStep = ({ name, level, onInfoChange }: LevelStepProps) => {
  const handleLevelSelect = (title: KO_LEVELS) => {
    onInfoChange(INFO_KEY.LEVEL, level === LEVELS[title] ? null : LEVELS[title]);
  };

  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          원하는 클래스의 난이도
        </Head>
        <Text tag="b2" color="gray7">
          {name}님께 딱 맞는 클래스를 추천해 드릴게요
        </Text>
      </Flex>

      <Flex tag="ul" direction="column" gap="0.8rem" marginTop="2.8rem" paddingBottom="4.6rem" width="100%">
        {LEVEL.map((elem) => (
          <LevelButton
            key={elem.title}
            level={elem}
            isSelected={level === null ? null : level === LEVELS[elem.title as KO_LEVELS]}
            onClick={() => handleLevelSelect(elem.title as KO_LEVELS)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default LevelStep;
