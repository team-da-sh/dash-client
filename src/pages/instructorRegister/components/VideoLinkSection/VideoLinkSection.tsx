import type { UseFormRegister, UseFormSetFocus } from 'react-hook-form';
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
  control: Control<instructorRegisterFormTypes>;
  setFocus: UseFormSetFocus<instructorRegisterFormTypes>;
}

const VideoLinkSection = ({ control, register, setFocus }: VideoLinkSectionPropTypes) => {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: INFO_KEY.VIDEO_URLS,
  });

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    update(index, { value: e.target.value });
  };

  const handleAdd = () => {
    if (fields.length >= MAX_VIDEO_INPUT || fields[fields.length - 1]?.value.trim() === '') return;

    append({ value: '' }, { shouldFocus: true });

    Promise.resolve().then(() => {
      setFocus(`videoUrls.${fields.length}.value`);
    });
  };

  const handleRemove = (index: number) => {
    // 제거 대상 앞쪽에 포커스
    const nextFocusIndex = fields.length === 1 ? 0 : Math.max(index - 1, 0);

    if (fields.length === 1) {
      update(0, { value: '' });
    } else {
      remove(index);
    }

    Promise.resolve().then(() => {
      setFocus(`videoUrls.${nextFocusIndex}.value`);
    });
  };

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 20 })}>
      <Description title="유튜브 영상 등록" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        {fields.map((field, index) => {
          const { ref, onChange, name } = register(`videoUrls.${index}.value`);

          return (
            <Input
              key={index}
              ref={ref}
              name={name}
              value={field.value || ''}
              onChange={(e) => {
                onChange(e);
                handleChange(index, e);
              }}
              rightAddOn={
                index === 0 && !field.value ? null : (
                  <IcXCircleGray width="2.4rem" onClick={() => handleRemove(index)} />
                )
              }
              placeholder={index < 1 ? 'https://www.youtube.com/watch?v=LPh1c0pGIi' : undefined}
            />
          );
        })}

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
