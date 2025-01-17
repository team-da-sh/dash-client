import { useState } from 'react';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { BtnCheck, IcDocumentBlack20, IcGraduationBlack20, IcPlusGray0524 } from '@/assets/svg';
import Description from '../Description';
import { careerFlexStyle, checkboxStyle } from '../PersonalSNSStep/index.css';
import { addInputBoxStyle } from './index.css';

const CareerStep = () => {
  const [isEducationActive, setIsEducationActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);

  const handleEduCheck = () => {
    setIsEducationActive((prev) => !prev);
  };

  const handleCareerCheck = () => {
    setIsCareerActive((prev) => !prev);
  };

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
            <Input />
            <Flex justify="center" align="center" className={addInputBoxStyle}>
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
