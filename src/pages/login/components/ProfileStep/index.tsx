import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Input from '@/components/Input';
import Text from '@/components/Text';

interface ProfileStepProps {}

const ProfileStep = ({}: ProfileStepProps) => {
  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          프로필 완성
        </Head>
        <Text tag="b2" color="gray7">
          이유지님의 댄서네임을 알려주세요
        </Text>
      </Flex>

      <Flex direction="column" gap="1.6rem" marginTop="2.8rem" width="100%">
        <Input placeholder="댄서네임을 입력하세요" />
      </Flex>
    </Flex>
  );
};

export default ProfileStep;
