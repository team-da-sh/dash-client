import type { UseFormSetValue } from 'react-hook-form';
import InputSection from '@/pages/instructorRegister/components/CareerSection/InputSection/InputSection';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { INFO_KEY } from '../../constants/registerSection';
import type { instructorRegisterFormTypes } from '../../types/instructorRegisterForm';

interface VideoLinkSectionPropTypes {
  videoUrls: string[];
  setValue: UseFormSetValue<instructorRegisterFormTypes>;
  isNoneChecked: boolean;
  handleVideoCheck: () => void;
}

const VideoLinkSection = ({ videoUrls, setValue, isNoneChecked, handleVideoCheck }: VideoLinkSectionPropTypes) => {
  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 27 })}>
      <Description title="유튜브 영상 등록" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />

      <InputSection
        title="링크"
        placeholder="https://www.youtube.com/watch?v=LPh1c0pGIi"
        isNoneChecked={isNoneChecked}
        onToggleActive={handleVideoCheck}
        inputItems={videoUrls.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) => {
          setValue(
            INFO_KEY.VIDEO_URLS,
            updatedItems.map((item) => item.value)
          );
        }}
      />
    </section>
  );
};

export default VideoLinkSection;
