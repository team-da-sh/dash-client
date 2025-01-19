import { icCameraStyle, inputStyle, previewImgStyle } from '@/pages/onboarding/components/ProfileStep/index.css';
import { excludeSpecialBlankChar, INFO_KEY } from '@/pages/onboarding/constants';
import { onboardInfoTypes } from '@/pages/onboarding/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { useUploadImg } from '@/hooks/useUploadImg';
import { IcCameraMain0624 } from '@/assets/svg';
import preview from '@/../public/svg/ic_profile_basic.svg';

interface ProfileStepProps {
  nickName: string;
  profileImageUrl: string;
  isNickNameError: boolean;
  changeIsNickNameError: (isError: boolean) => void;
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
}

const ProfileStep = ({ nickName, isNickNameError, changeIsNickNameError, onInfoChange }: ProfileStepProps) => {
  const { imgRef, previewImg, handleUploaderClick, uploadImgFile } = useUploadImg();

  const handleNickNameChange = (nickName: string) => {
    if (nickName.length > 8) {
      return;
    }
    if (nickName.length) {
      if (excludeSpecialBlankChar.test(nickName)) {
        changeIsNickNameError(false);
      } else {
        changeIsNickNameError(true);
      }
    }

    onInfoChange(INFO_KEY.NICKNAME, nickName);
  };

  // 이미지 url 정상화 되면 사용할 예정
  // const handleProfileImageUrlChange = (profileImageUrl: string) => {
  //   onInfoChange(INFO_KEY.PROFILE_IMAGE_URL, profileImageUrl);
  // };

  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem" marginBottom="3.95rem">
        <Head level="h1" tag="h2">
          프로필 완성
        </Head>
        <Text tag="b2" color="gray7">
          이유지님의 댄서네임을 알려주세요
        </Text>
      </Flex>

      <Flex width="100%" justify="center">
        <Flex
          justify="center"
          width="100%"
          onClick={handleUploaderClick}
          style={previewImg ? { backgroundImage: `url(${previewImg})` } : { backgroundImage: `url(${preview})` }}
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
          value={nickName}
          onChange={(e) => handleNickNameChange(e.target.value)}
        />
        <Flex width="100%" justify="spaceBetween">
          <Text tag="b6" color="alert3">
            {isNickNameError ? '특수기호, 띄어쓰기는 입력할 수 없어요' : ''}
          </Text>

          <Text tag="c3" color={isNickNameError ? 'alert3' : 'main4'}>
            {nickName && `${nickName.length}/8`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileStep;
