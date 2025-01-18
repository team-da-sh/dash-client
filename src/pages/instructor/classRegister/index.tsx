import { useRef, useState } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Input from '@/components/Input';
import LevelButton from '@/components/LevelButton';
import Text from '@/components/Text';
import { IcPlusGray0524 } from '@/assets/svg';
import { GENRE_CATEGORY, LEVEL } from '@/constants';
import Description from './Description';

const ClassRegister = () => {
  const explainTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const scheduleTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [selectedGenre, setSelectedGenre] = useState<string | null>();
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>();

  const toggleCategory = (category: string) => {
    setSelectedGenre((prev) => (prev === category ? null : category));
  };

  const handleLevelSelect = (title: string) => {
    setSelectedLevelTitle((prev) => (prev === title ? null : title));
  };

  const handleExplainTextArea = () => {
    const textArea = explainTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const handleScheduleTextArea = () => {
    const textArea = scheduleTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  return (
    <>
      <Header.Root isColor={true}>
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
            ref={explainTextAreaRef}
            onInput={handleExplainTextArea}
            placeholder="EX) 노래 제목, 회차별 커리큘럼, 진행 방식, 목표 등"
            className={styles.textareaStyle}
          />
        </section>

        {/* 클래스 대표 이미지 */}
        <section className={styles.imageSectionStyle}>
          <Description title="클래스 대표 이미지" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
        </section>

        {/* 장르 */}
        <section className={styles.genreSectionStyle}>
          <Description title="장르" subTitle="클래스에 해당하는 장르를 최대 2개까지 골라 주세요" />

          <div className={styles.genreButtonContainerStyle}>
            {GENRE_CATEGORY.flat().map((category, index) => (
              <GenreButton
                key={index}
                category={category}
                isSelected={selectedGenre === category}
                onClick={() => toggleCategory(category)}
              />
            ))}
          </div>
        </section>

        {/* 난이도 */}
        <section className={styles.levelSectionStyle}>
          <Description title="난이도" subTitle="클래스에 해당하는 난이도를 골라주세요" />
          <Flex direction="column" gap="0.8rem">
            {LEVEL.map((level) => (
              <LevelButton
                key={level.title}
                level={level}
                isSelected={selectedLevelTitle === level.title}
                onClick={() => handleLevelSelect(level.title)}
              />
            ))}
          </Flex>
        </section>

        {/* 클래스 추천 대상 */}
        <section className={styles.recommendSectionStyle}>
          <Description title="클래스 추천 대상" subTitle="어떤 수강생에게 추천하고 싶은지 알려주세요" />
          <textarea
            ref={scheduleTextAreaRef}
            onInput={handleScheduleTextArea}
            placeholder="EX) 프리스타일에 자신감을 가지고 싶은 분, 힙합 기본기를 탄탄하게 다지고 싶은 분 등"
            className={styles.textareaStyle}
          />
        </section>

        {/* 클래스 일정 */}
        <section className={styles.scheduleSectionStyle}>
          <Description title="클래스 일정" subTitle="클래스가 진행될 회차별 날짜와 시간을 등록해 주세요" />
          <Flex justify="center" align="center" className={styles.addInputBoxStyle}>
            <IcPlusGray0524 width={'2.4rem'} />
          </Flex>
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
