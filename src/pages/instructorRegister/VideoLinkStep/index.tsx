import Description from '@/pages/instructorRegister/Description';
import { addInputBoxStyle } from '@/pages/instructorRegister/VideoLinkStep/index.css';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import { IcPlusGray0524 } from '@/assets/svg';

const VideoLinkStep = () => {
  return (
    <>
      <Description title="YOUTUBE 영상 업로드" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        <Input />
        <Flex justify="center" align="center" className={addInputBoxStyle}>
          <IcPlusGray0524 width={'2.4rem'} />
        </Flex>
      </Flex>
    </>
  );
};

export default VideoLinkStep;
