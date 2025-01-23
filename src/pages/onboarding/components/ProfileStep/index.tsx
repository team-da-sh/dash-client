import { icCameraStyle, inputStyle, previewImgStyle } from '@/pages/onboarding/components/ProfileStep/index.css';
import { INFO_KEY, MAX_NICKNAME_LENGTH } from '@/pages/onboarding/constants';
import { onboardInfoTypes } from '@/pages/onboarding/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Input from '@/components/Input';
import Text from '@/components/Text';
import useImageUploader from '@/hooks/useImageUploader';
import { INCLUDE_BLANK, INCLUDE_SPECIAL } from '@/constants/regex';
import defaultProfile from '@/assets/images/image_profile_basic.png';
import { IcCameraMain0624 } from '@/assets/svg';

interface ProfileStepProps {
  name: string;
  nickname: string;
  profileImageUrl: string;
  isNicknameError: boolean;
  changeIsNicknameError: (isError: boolean) => void;
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
  setInfo: React.Dispatch<React.SetStateAction<onboardInfoTypes>>;
}

const ProfileStep = ({ name, nickname, isNicknameError, changeIsNicknameError, onInfoChange }: ProfileStepProps) => {
  const handleImageUploadSuccess = (url: string) => {
    onInfoChange(INFO_KEY.PROFILE_IMAGE_URL, url);
  };
  const handleDeleteUrl = () => {
    onInfoChange(INFO_KEY.PROFILE_IMAGE_URL, '');
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(
    handleImageUploadSuccess,
    handleDeleteUrl
  );

  const handleNicknameChange = (nickname: string) => {
    if (nickname.length > MAX_NICKNAME_LENGTH) return;

    if (nickname.length) {
      if (INCLUDE_SPECIAL.test(nickname) || INCLUDE_BLANK.test(nickname)) {
        changeIsNicknameError(true);
      } else {
        changeIsNicknameError(false);
      }
    } else {
      changeIsNicknameError(false);
    }

    onInfoChange(INFO_KEY.NICKNAME, nickname);
  };

  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem" marginBottom="3.95rem">
        <Head level="h1" tag="h2">
          프로필 완성
        </Head>
        <Text tag="b2" color="gray7">
          {name}님의 댄서네임을 알려주세요
        </Text>
      </Flex>

      <Flex width="100%" justify="center">
        <Flex
          justify="center"
          width="100%"
          onClick={handleUploaderClick}
          style={previewImg ? { backgroundImage: `url(${previewImg})` } : { backgroundImage: `url(${defaultProfile})` }}
          className={previewImgStyle({ hasImage: !!previewImg })}>
          <IcCameraMain0624 width={24} height={24} className={icCameraStyle} />
          <input
            type="file"
            accept="image/*"
            id="profileImg"
            className={inputStyle}
            onChange={uploadImgFile}
            ref={imgRef}
          />
        </Flex>
      </Flex>

      <Flex direction="column" gap="0.8rem" marginTop="2.8rem" width="100%">
        <Input
          placeholder="댄서네임을 입력하세요"
          value={nickname}
          onChange={(e) => handleNicknameChange(e.target.value)}
        />
        <Flex width="100%" justify="spaceBetween">
          <Text tag="b6" color="alert3">
            {isNicknameError ? '특수기호, 띄어쓰기는 입력할 수 없어요' : ''}
          </Text>

          <Text tag="c3" color={isNicknameError ? 'alert3' : 'main4'}>
            {nickname && `${nickname.length}/${MAX_NICKNAME_LENGTH}`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileStep;
