import { useRef } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { useFieldArray, type Control } from 'react-hook-form';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { addInputBoxStyle } from '@/pages/instructorRegister/components/VideoLinkSection/videoLinkSection.css';
import { INFO_KEY, MAX_VIDEO_INPUT } from '@/pages/instructorRegister/constants/registerSection';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { instructorRegisterFormTypes } from '../../types/instructorRegisterForm';

interface VideoLinkSectionPropTypes {
  register: UseFormRegister<instructorRegisterFormTypes>;
  // setValue: UseFormSetValue<instructorRegisterFormTypes>;
  // videoUrls: string[];
  control: Control<instructorRegisterFormTypes>;
}

const VideoLinkSection = ({ control, register }: VideoLinkSectionPropTypes) => {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: INFO_KEY.VIDEO_URLS,
  });

  const lastInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    update(index, { value: e.target.value });
  };

  const handleAdd = () => {
    if (fields.length >= MAX_VIDEO_INPUT || fields[fields.length - 1]?.value.trim() === '') return;

    append({ value: '' }, { shouldFocus: true });
    setTimeout(() => lastInputRef.current?.focus(), 0);
  };

  const handleRemove = (index: number) => {
    if (fields.length === 1) {
      update(0, { value: '' });
    } else {
      remove(index);
    }
    setTimeout(() => lastInputRef.current?.focus(), 0);
  };

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 20 })}>
      <Description title="유튜브 영상 등록" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        {fields.map((field, index) => (
          <Input
            key={index}
            ref={(el) => {
              if (index === fields.length - 1) lastInputRef.current = el;
            }}
            value={field.value || ''}
            onChange={(e) => handleChange(index, e)}
            name={`${INFO_KEY.VIDEO_URLS}.${index}`}
            rightAddOn={
              index === 0 && !field.value ? null : <IcXCircleGray width="2.4rem" onClick={() => handleRemove(index)} />
            }
            placeholder={index < 1 ? 'https://www.youtube.com/watch?v=LPh1c0pGIi' : undefined}
          />
        ))}

        {fields.length < MAX_VIDEO_INPUT && (
          <Flex justify="center" align="center" className={addInputBoxStyle} onClick={handleAdd}>
            <IcPlusGray0524 width="2.4rem" />
          </Flex>
        )}
      </Flex>
    </section>
  );
};

export default VideoLinkSection;
