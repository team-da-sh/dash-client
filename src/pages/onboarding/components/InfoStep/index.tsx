import { labelStyle } from '@/pages/onboarding/components/InfoStep/index.css';
import { onboardInfoTypes } from '@/pages/onboarding/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Input from '@/components/Input';
import Text from '@/components/Text';

interface InfoStepProps {
  name: string;
  phoneNumber: string;
  onInfoChange: (key: keyof onboardInfoTypes, value: string) => void;
}

const InfoStep = ({ name, phoneNumber, onInfoChange }: InfoStepProps) => {
  const handleNameChange = (name: string) => {
    onInfoChange('name', name);
  };

  console.log('name step');
  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          개인정보 입력
        </Head>
        <Text tag="b2" color="gray7">
          앞으로 클래스를 신청할 때 활용될 거예요
        </Text>
      </Flex>

      <Flex direction="column" gap="1.6rem" marginTop="2.8rem" width="100%">
        <Flex align="center" width="100%" gap="0.8rem">
          <Text tag="b4" className={labelStyle}>
            이름
          </Text>
          <Input placeholder="김대쉬" value={name} onChange={(e) => handleNameChange(e.target.value)} />
        </Flex>
        <Flex align="center" width="100%" gap="0.8rem">
          <Text tag="b4" className={labelStyle}>
            전화번호
          </Text>
          <Input placeholder="01012345678" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoStep;
