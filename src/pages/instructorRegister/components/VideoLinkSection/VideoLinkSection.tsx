import type { UseFormSetValue } from 'react-hook-form';
import InputSection from '@/pages/instructorRegister/components/CareerSection/InputSection/InputSection';
import Description from '@/pages/instructorRegister/components/Description/Description';
import {
  INSTRUCTOR_REGISTER_FORM_KEY,
  INSTRUCTOR_REGISTER_PLACEHOLDER,
  MAX_VIDEO_INPUT_COUNT,
} from '@/pages/instructorRegister/constants/registerSection';
import type { instructorRegisterFormTypes } from '@/pages/instructorRegister/types/instructorRegisterForm';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface VideoLinkSectionPropTypes {
  videoUrls: string[];
  setValue: UseFormSetValue<instructorRegisterFormTypes>;
  isNoneChecked: boolean;
}

const VideoLinkSection = ({ videoUrls, setValue, isNoneChecked }: VideoLinkSectionPropTypes) => {
  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 27 })}>
      <Description title="유튜브 영상 등록" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />

      <InputSection
        title="링크"
        placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.VIDEO}
        isNoneChecked={isNoneChecked}
        onToggleActive={() => {
          setValue(INSTRUCTOR_REGISTER_FORM_KEY.IS_VIDEO_NONE_CHECKED, !isNoneChecked, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
        inputItems={videoUrls.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) => {
          setValue(
            INSTRUCTOR_REGISTER_FORM_KEY.VIDEO_URLS,
            updatedItems.map((item) => item.value),
            { shouldValidate: true, shouldTouch: true, shouldDirty: true }
          );
        }}
        maxInputCount={MAX_VIDEO_INPUT_COUNT}
      />
    </section>
  );
};

export default VideoLinkSection;
