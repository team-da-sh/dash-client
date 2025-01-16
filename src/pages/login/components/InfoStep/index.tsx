import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Input from '@/components/Input';
import Text from '@/components/Text';

interface InfoStepProps {}

const InfoStep = ({}: InfoStepProps) => {
  return (
    <Flex direction="column" width="100%">
      <Head level="h1" tag="h2">
        개인정보 입력
      </Head>
      <Text tag="b2" color="gray7">
        앞으로 클래스를 신청할 때 활용될 거예요
      </Text>

      <Flex width="100%" direction="column" gap="1.6rem">
        <Flex justify="spaceBetween">
          <Text tag="b4">이름</Text>
          <Input placeholder="김대쉬" />
        </Flex>
        <Flex justify="spaceBetween">
          <Text tag="b4">전화번호</Text>
          <Input placeholder="01012345678" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoStep;
