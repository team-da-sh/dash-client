import { useRef } from 'react';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { addInputBoxStyle } from '@/pages/instructorRegister/components/InstructorRegisterFunnel/VideoLinkStep/videoLinkStep.css';
import { INFO_KEY, VIDEO_INPUT_MAX } from '@/pages/instructorRegister/constants';
import { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import { InputItemTypes } from '@/pages/instructorRegister/types/inputItemTypes';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';

interface VideoLinkStepProps {
  videoUrls: string[];
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const VideoLinkStep = ({ videoUrls, onInfoChange }: VideoLinkStepProps) => {
  const inputItems = videoUrls.map((value, id) => ({ id: id + 1, value }));
  const nextID = useRef<number>(inputItems.length + 1);
  const onItemsChange = (updatedItems: InputItemTypes[]) =>
    onInfoChange(
      INFO_KEY.VIDEO_URLS,
      updatedItems.map((item) => item.value)
    );

  const addItem = () => {
    if (inputItems.length >= 5 || inputItems[inputItems.length - 1]?.value.trim() === '') {
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
    if (id === 1) {
      onItemsChange(inputItems.map((item) => (item.id === id ? { ...item, value: '' } : item)));
    } else {
      onItemsChange(inputItems.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Description title="YOUTUBE 영상 업로드" subTitle="나를 대표하는 댄스 영상을 최대 5개 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        {inputItems.map(({ id, value }) => (
          <Input
            value={value}
            onChange={(e) => {
              const updatedItems = inputItems.map((item) =>
                item.id === id ? { ...item, value: e.target.value } : item
              );
              onItemsChange(updatedItems);
            }}
            rightAddOn={value && <IcXCircleGray width={'2.4rem'} onClick={() => deleteItem(id)} />}
          />
        ))}

        {inputItems.length < VIDEO_INPUT_MAX && (
          <Flex justify="center" align="center" className={addInputBoxStyle} onClick={addItem}>
            <IcPlusGray0524 width={'2.4rem'} />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default VideoLinkStep;
