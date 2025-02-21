import { labelStyle } from '@/pages/onboarding/components/InfoStep/infoStep.css';
import { INFO_KEY } from '@/pages/onboarding/constants';
import { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateTypingName, validateTypingPhoneNumber } from '@/pages/onboarding/utils/validate';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface InfoStepProps {
  name: string;
  phoneNumber: string;
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
}

const InfoStep = ({ name, phoneNumber, onInfoChange }: InfoStepProps) => {
  const handleNameChange = (name: string) => {
    if (!validateTypingName(name)) return;

    onInfoChange(INFO_KEY.NAME, name);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    if (!validateTypingPhoneNumber(phoneNumber)) return;

    onInfoChange(INFO_KEY.PHONE_NUMBER, phoneNumber);
  };

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
          <Input
            placeholder="01012345678"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoStep;
