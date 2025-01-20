import { useRef, useState } from 'react';
import Description from '@/pages/instructorRegister/Description';
import {
  careerFlexStyle,
  checkboxStyle,
  inputContainerStyle,
  inputIconStyle,
} from '@/pages/instructorRegister/InstructorRegisterFunnel/CareerStep/index.css';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { BtnCheck, IcDocumentBlack20, IcGraduationBlack20, IcPlusGray0524, IcXCircleGray } from '@/assets/svg';
import { InstructorRegisterInfoTypes } from '../../types';
import { addInputBoxStyle } from './index.css';

interface CareerStepProps {
  education: string[];
  experience: string[];
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

interface InputItemTypes {
  id: number;
  value: string;
}

const CareerStep = ({ education, experience, onInfoChange }: CareerStepProps) => {
  const nextID = useRef<number>(2);

  const [isEducationActive, setIsEducationActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);
  const [inputItems, setInputItems] = useState<InputItemTypes[]>([
    { id: 1, value: '' }, // 기본적으로 첫 번째 Input이 존재
  ]);

  const handleEduCheck = () => {
    setIsEducationActive((prev) => !prev);
  };

  const handleCareerCheck = () => {
    setIsCareerActive((prev) => !prev);
  };

  // input 추가 삭제 로직 시작
  const addItem = () => {
    if (inputItems[inputItems.length - 1]?.value.trim() === '') {
      alert('마지막 입력란을 채워주세요!');
      return;
    }

    const input = {
      id: nextID.current,
      value: '',
    };

    setInputItems([...inputItems, input]);
    nextID.current += 1;
  };

  const deleteItem = (id: number) => {
    if (id === 1) {
      // 첫 번째 Input은 삭제 대신 값 초기화
      setInputItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, value: '' } : item)));
    } else {
      setInputItems(inputItems.filter((item) => item.id !== id));
    }
  };

  const getEducationValues = () => inputItems.map((item) => item.value);

  console.log(getEducationValues());

  return (
    <>
      <Description title="학력 및 경력" subTitle="춤에 관련된 것이라면 자유롭게 입력해 보세요" />

      {/* 학력 */}
      <Flex direction="column" gap="1.2rem" className={careerFlexStyle}>
        <Flex justify="spaceBetween" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcGraduationBlack20 width={'2rem'} />
            <Text tag="b4" color="gray10">
              학력
            </Text>
          </Flex>
          <Flex gap="0.8rem" align="center">
            <Text tag="b7" color="gray10">
              해당 없음
            </Text>
            {isEducationActive ? (
              <BtnCheck width={'2rem'} onClick={handleEduCheck} />
            ) : (
              <div className={checkboxStyle} onClick={handleEduCheck} />
            )}
          </Flex>
        </Flex>

        {!isEducationActive && (
          <Flex direction="column" gap="0.8rem" width="100%">
            {inputItems.map(({ id, value }) => (
              <div className={inputContainerStyle}>
                <Input
                  value={value}
                  onChange={(e) => {
                    const updatedItems = inputItems.map((item) =>
                      item.id === id ? { ...item, value: e.target.value } : item
                    );
                    setInputItems(updatedItems);
                  }}
                />
                {value && <IcXCircleGray className={inputIconStyle} width={'2.4rem'} onClick={() => deleteItem(id)} />}
              </div>
            ))}

            <Flex justify="center" align="center" className={addInputBoxStyle} onClick={addItem}>
              <IcPlusGray0524 width={'2.4rem'} />
            </Flex>
          </Flex>
        )}
      </Flex>

      {/* 경력 */}
      <Flex direction="column" gap="1.2rem">
        <Flex justify="spaceBetween" width="100%">
          <Flex gap="0.8rem" align="center">
            <IcDocumentBlack20 width={'2rem'} />
            <Text tag="b7" color="gray10">
              경력
            </Text>
          </Flex>
          <Flex gap="0.8rem" align="center">
            <Text tag="b7" color="gray10">
              해당 없음
            </Text>
            {isCareerActive ? (
              <BtnCheck width={'2rem'} onClick={handleCareerCheck} />
            ) : (
              <div className={checkboxStyle} onClick={handleCareerCheck} />
            )}
          </Flex>
        </Flex>

        {!isCareerActive && (
          <Flex direction="column" gap="0.8rem" width="100%">
            <Input />
            <Flex justify="center" align="center" className={addInputBoxStyle}>
              <IcPlusGray0524 width={'2.4rem'} />
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default CareerStep;
