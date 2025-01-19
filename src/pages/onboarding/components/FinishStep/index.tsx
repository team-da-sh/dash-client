import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface FinishStepProps {
  nickName: string;
}

const FinishStep = ({ nickName }: FinishStepProps) => {
  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          환영해요 {nickName} 님 <br /> 이제 몸을 풀어볼까요?
        </Head>
        <Text tag="b2" color="gray7">
          취향에 꼭 맞는 댄스 클래스를 둘러보고 신청할 수 있어요
        </Text>
      </Flex>

      <Flex marginTop="9.8rem" margin="9.8rem auto 0 auto">
        <div>이미지</div>
      </Flex>
    </Flex>
  );
};

export default FinishStep;
