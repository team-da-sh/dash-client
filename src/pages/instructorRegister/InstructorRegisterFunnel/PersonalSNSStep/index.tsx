import Description from '@/pages/instructorRegister/Description';
import { INFO_KEY } from '@/pages/instructorRegister/constants';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { IcInstagram20, IcYoutube20 } from '@/assets/svg';
import { InstructorRegisterInfoTypes } from '../../types';

interface PersonalSNSStepProps {
  instagram: string;
  youtube: string;
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const PersonalSNSStep = ({ instagram, youtube, onInfoChange }: PersonalSNSStepProps) => {
  const handleInstagramChange = (value: string) => {
    onInfoChange(INFO_KEY.INSTAGRAM, value);
  };

  const handleYoutubeChange = (value: string) => {
    onInfoChange(INFO_KEY.YOUTUBE, value);
  };

  return (
    <>
      <Description title="개인 SNS 입력" subTitle="두 항목 중 하나는 반드시 입력해 주세요" />

      <Flex direction="column" gap="2.4rem">
        <Flex direction="column" gap="1.2rem" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcInstagram20 width={'2rem'} />
            <Text tag="b6">인스타그램</Text>
          </Flex>
          <Input
            placeholder="http://instagram.com/dashofficial"
            value={instagram}
            onChange={(e) => handleInstagramChange(e.target.value)}
          />
        </Flex>

        <Flex direction="column" gap="1.2rem" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcYoutube20 width={'2rem'} />
            <Text tag="b6">유튜브 채널</Text>
          </Flex>
          <Input
            placeholder="http://youtube.com/dashofficial"
            value={youtube}
            onChange={(e) => handleYoutubeChange(e.target.value)}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default PersonalSNSStep;
