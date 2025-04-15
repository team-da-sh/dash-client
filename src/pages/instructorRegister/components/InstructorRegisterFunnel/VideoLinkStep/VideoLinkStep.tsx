import { useRef } from 'react';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { addInputBoxStyle } from '@/pages/instructorRegister/components/InstructorRegisterFunnel/VideoLinkStep/videoLinkStep.css';
import { INFO_KEY, MAX_VIDEO_INPUT } from '@/pages/instructorRegister/constants/funnel';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import type { InputItemTypes } from '@/pages/instructorRegister/types/inputItemTypes';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';

interface VideoLinkStepPropTypes {
  videoUrls: string[];
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const VideoLinkStep = ({ videoUrls, onInfoChange }: VideoLinkStepPropTypes) => {
  const inputItems = videoUrls.map((value, id) => ({ id: id + 1, value }));
  const nextID = useRef<number>(inputItems.length + 1);
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItems = inputItems.map((item) => (item.id === id ? { ...item, value: e.target.value } : item));
    onItemsChange(updatedItems);
  };

  const onItemsChange = (updatedItems: InputItemTypes[]) =>
    onInfoChange(
      INFO_KEY.VIDEO_URLS,
      updatedItems.map((item) => item.value)
    );

  const addItem = () => {
    if (inputItems.length >= MAX_VIDEO_INPUT || inputItems[inputItems.length - 1]?.value.trim() === '') {
      return;
    }

    const input = {
      id: nextID.current,
      value: '',
    };

    onItemsChange([...inputItems, input]);
    nextID.current += 1;
  };

  const deleteItem = (id: number) => {
    if (inputItems.length === 1) {
      onItemsChange([{ ...inputItems[0], value: '' }]);
    } else {
      onItemsChange(inputItems.filter((item) => item.id !== id));
    }

    Promise.resolve().then(() => {
      lastInputRef.current?.focus();
    });
  };

  const renderDeleteIcon = (id: number, value: string) => {
    if (id === 1) {
      return value && <IcXCircleGray width={'2.4rem'} onClick={() => deleteItem(id)} />;
    } else {
      return <IcXCircleGray width={'2.4rem'} onClick={() => deleteItem(id)} />;
    }
  };

  return (
    <>
      <Description title="YOUTUBE 영상 업로드" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        {inputItems.map(({ id, value }, index) => (
          <Input
            key={id}
            ref={(el) => {
              if (index === inputItems.length - 1) {
                lastInputRef.current = el;
              }
            }}
            value={value}
            onChange={(e) => handleInputChange(id, e)}
            rightAddOn={renderDeleteIcon(id, value)}
            placeholder={id < 2 ? 'https://www.youtube.com/watch?v=LPh1c0pGIi' : undefined}
          />
        ))}

        {inputItems.length < MAX_VIDEO_INPUT && (
          <Flex
            justify="center"
            align="center"
            className={addInputBoxStyle}
            onClick={() => {
              addItem();
              Promise.resolve().then(() => {
                lastInputRef.current?.focus();
              });
            }}>
            <IcPlusGray0524 width={'2.4rem'} />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default VideoLinkStep;
