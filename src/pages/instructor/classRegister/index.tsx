import { useRef } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Text from '@/components/Text';
import Description from './Description';

const ClassRegister = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem'; // Default 높이!
      textArea.style.height = `${textArea.scrollHeight}px`; // 내용에 따라 높이 조정
    }
  };

  return (
    <>
      <Header.Root>
        <Header.BackIcon />
        <Header.Title title="클래스 개설"></Header.Title>
      </Header.Root>
      <div className={styles.containerStyle}>
        {/* 클래스명 section */}
        <section className={styles.nameSectionStyle}>
          <Description title="클래스명" subTitle="돋보일 수 있는 클래스명을 최대 30자 입력해 주세요" />
          <Flex direction="column" gap="0.4rem">
            <Input placeholder="클래스명을 입력해 주세요" />
            <Text tag="c3" color="gray4" className={styles.nameLengthStyle}>
              0 / 30
            </Text>
          </Flex>
        </section>

        {/* 클래스 설명 */}
        <section className={styles.explanationSectionStyle}>
          <Description title="클래스 설명" subTitle="예비 수강생들을 위해 클래스를 소개해 주세요" />
          <textarea
            ref={textAreaRef}
            onInput={handleInput}
            placeholder="저는 이런 댄서예요!"
            className={styles.textareaStyle}></textarea>{' '}
        </section>

        {/* 클래스 대표 이미지 */}
        <section className={styles.imageSectionStyle}>
          <Description title="클래스 대표 이미지" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
        </section>

        <section className={styles.genreSectionStyle}>
          <Description title="장르" subTitle="클래스에 해당하는 장르를 최대 2개까지 골라 주세요" />
        </section>

        <section className={styles.levelSectionStyle}>
          <Description title="난이도" subTitle="클래스에 해당하는 난이도를 골라주세요" />
        </section>

        <section className={styles.recommendSectionStyle}>
          <Description title="클래스 추천 대상" subTitle="어떤 수강생에게 추천하고 싶은지 알려주세요" />
        </section>

        <section className={styles.scheduleSectionStyle}>
          <Description title="클래스 일정" subTitle="클래스가 진행될 회차별 날짜와 시간을 등록해 주세요" />
        </section>

        <section className={styles.personnelSectionStyle}>
          <Description title="모집 인원" subTitle="원활한 클래스 진행을 위해 최대 인원을 알려주세요" />
        </section>

        <section className={styles.placeSectionStyle}>
          <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
        </section>

        <section className={styles.amountSectionStyle}>
          <Description title="수강료" subTitle="전체 회차를 포함한 최종 금액을 알려주세요" />
        </section>
      </div>
    </>
  );
};

export default ClassRegister;
