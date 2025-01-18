import { useState } from 'react';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import LevelButton from '@/components/LevelButton';
import Text from '@/components/Text';
import { LEVEL } from '@/constants';

interface LevelStepProps {}

const LevelStep = ({}: LevelStepProps) => {
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>(null);

  const handleLevelSelect = (title: string) => {
    setSelectedLevelTitle((prev) => (prev === title ? null : title));
  };

  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          원하는 클래스의 난이도
        </Head>
        <Text tag="b2" color="gray7">
          이유지님께 딱 맞는 클래스를 추천해 드릴게요
        </Text>
      </Flex>

      <Flex tag="ul" direction="column" gap="0.8rem" marginTop="2.8rem" paddingBottom="4.6rem" width="100%">
        {LEVEL.map((level) => (
          <LevelButton
            key={level.title}
            level={level}
            isSelected={selectedLevelTitle === null ? null : selectedLevelTitle === level.title}
            isOnboard={true}
            onClick={() => handleLevelSelect(level.title)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default LevelStep;
