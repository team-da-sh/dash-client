import { useState } from 'react';
import Description from '@/pages/instructorRegister/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { IcInstagram20, IcYoutube20 } from '@/assets/svg';

const MIN_LENGTH = 9;

const PersonalSNSStep = () => {
  const [instagramValue, setInstagramValue] = useState('');
  const [youtubeValue, setYoutubeValue] = useState('');
  const [instagramError, setInstagramError] = useState(false);
  const [youtubeError, setYoutubeError] = useState(false);

  const validateInput = (value: string) => value.length >= MIN_LENGTH;

  const handleInstagramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInstagramValue(value);
    setInstagramError(!validateInput(value));
  };

  const handleYoutubeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYoutubeValue(value);
    setYoutubeError(!validateInput(value));
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
            value={instagramValue}
            onChange={handleInstagramChange}
            isError={instagramError}
          />
          {instagramError && instagramValue && (
            <Text tag="b6" color="alert3">
              9글자 이상 입력해야 합니다.
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="1.2rem" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcYoutube20 width={'2rem'} />
            <Text tag="b6">유튜브 채널</Text>
          </Flex>
          <Input
            placeholder="http://youtube.com/dashofficial"
            value={youtubeValue}
            onChange={handleYoutubeChange}
            isError={youtubeError}
          />
          {youtubeError && youtubeValue && (
            <Text tag="b6" color="alert3">
              9글자 이상 입력해야 합니다.
            </Text>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default PersonalSNSStep;
