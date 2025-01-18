import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { IcInstagram20, IcYoutube20 } from '@/assets/svg';
import Description from '../Description';

const PersonalSNSStep = () => {
  return (
    <>
      <Description title="개인 SNS 입력" subTitle="두 항목 중 하나는 반드시 입력해 주세요"></Description>

      <Flex direction="column" gap="2.4rem">
        <Flex direction="column" gap="1.2rem" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcInstagram20 width={'2rem'} />
            <Text tag="b6">인스타그램</Text>
          </Flex>
          <Input placeholder="http://instagram.com/dashofficial" />
        </Flex>

        <Flex direction="column" gap="1.2rem" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcYoutube20 width={'2rem'} />
            <Text tag="b6">유튜브 채널</Text>
          </Flex>
          <Input placeholder="http://youtube.com/dashofficial" />
        </Flex>
      </Flex>
    </>
  );
};

export default PersonalSNSStep;
