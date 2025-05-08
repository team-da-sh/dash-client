import { useEffect, useState } from 'react';
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import InputSection from '@/pages/instructorRegister/components/CareerSection/InputSection/InputSection';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { INFO_KEY } from '@/pages/instructorRegister/constants/registerSection';
import type { InputItemTypes } from '@/pages/instructorRegister/types/inputItemTypes';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { instructorRegisterFormTypes } from '../../types/instructorRegisterForm';

interface VideoLinkSectionPropTypes {
  register: UseFormRegister<instructorRegisterFormTypes>;
  setValue: UseFormSetValue<instructorRegisterFormTypes>;
  isNoneChecked: boolean;
  setIsNoneChecked: (value: boolean) => void;
}

const VideoLinkSection = ({ setValue, isNoneChecked, setIsNoneChecked }: VideoLinkSectionPropTypes) => {
  const [videoItems, setVideoItems] = useState<InputItemTypes[]>([{ id: 1, value: '' }]);

  // 폼 필드 값 변경 시 상태 업데이트
  const handleVideoItemsChange = (updatedItems: InputItemTypes[]) => {
    setVideoItems(updatedItems);
  };

  // 해당없음 토글
  const handleToggleNone = () => {
    setIsNoneChecked(!isNoneChecked);
  };

  // videoItems 변경 시 폼 데이터 업데이트
  useEffect(() => {
    // 컨트롤러를 통해 폼 값 업데이트
    const formValues = isNoneChecked
      ? []
      : videoItems.map((item) => ({ value: item.value })).filter((item) => item.value.trim() !== '');

    setValue(INFO_KEY.VIDEO_URLS, formValues);
  }, [videoItems, isNoneChecked, setValue]);

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 20 })}>
      <Description title="유튜브 영상 등록" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />

      <InputSection
        title="링크"
        placeholder="https://www.youtube.com/watch?v=LPh1c0pGIi"
        isNoneChecked={isNoneChecked}
        onToggleActive={handleToggleNone}
        inputItems={videoItems}
        onItemsChange={handleVideoItemsChange}
      />
    </section>
  );
};

export default VideoLinkSection;
