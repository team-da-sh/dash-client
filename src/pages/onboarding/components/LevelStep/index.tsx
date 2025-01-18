import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface LevelStepProps {}

const LevelStep = ({}: LevelStepProps) => {
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

      <Flex direction="column" gap="1.6rem" marginTop="2.8rem" width="100%">
        <Flex tag="ul"></Flex>
      </Flex>
    </Flex>
  );
};

export default LevelStep;
