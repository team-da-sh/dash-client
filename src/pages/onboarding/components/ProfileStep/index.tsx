import {
  icCameraStyle,
  inputStyle,
  previewImgStyle,
  profileStyle,
} from '@/pages/onboarding/components/ProfileStep/index.css';
import { INFO_KEY } from '@/pages/onboarding/constants';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { useUploadImg } from '@/hooks/useUploadImg';
import { IcCameraMain0624, IcProfileBasic } from '@/assets/svg';
import preview from '@/../public/svg/ic_profile_basic.svg';

interface ProfileStepProps {
  nickName: string;
  profileImageUrl: string;
  onInfoChange: (key: string, value: string) => void;
}

const ProfileStep = ({ nickName, profileImageUrl, onInfoChange }: ProfileStepProps) => {
  const { imgRef, previewImg, handleUploaderClick, uploadImgFile } = useUploadImg();

  const handleNickNameChange = (nickName: string) => {
    if (nickName.length > 8) {
      return;
    }
    onInfoChange(INFO_KEY.NICKNAME, nickName);
  };

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
            특수기호, 띄어쓰기는 입력할 수 없어요
          </Text>
          <Text tag="c3" color="alert3">{`${nickName.length}/8`}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileStep;
