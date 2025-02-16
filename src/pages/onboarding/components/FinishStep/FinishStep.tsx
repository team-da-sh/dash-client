import { ClearGif } from '@/shared/assets/gif';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface FinishStepProps {
  nickname: string;
}

const FinishStep = ({ nickname }: FinishStepProps) => {
  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          환영해요 {nickname} 님 <br /> 이제 몸을 풀어볼까요?
        </Head>
        <Text tag="b2" color="gray7">
          취향에 꼭 맞는 댄스 클래스를 둘러보고 신청할 수 있어요
        </Text>
      </Flex>

      <Flex width="100%" justify="center" marginTop="6.7rem">
        <img src={ClearGif} width={244} />
      </Flex>
    </Flex>
  );
};

export default FinishStep;
