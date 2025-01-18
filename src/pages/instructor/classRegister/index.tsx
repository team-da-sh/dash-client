import { ChangeEvent, useRef, useState } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Input from '@/components/Input';
import LevelButton from '@/components/LevelButton';
import Text from '@/components/Text';
import { IcPlusGray0524, IcSearchGray } from '@/assets/svg';
import { GENRE_CATEGORY, LEVEL } from '@/constants';
import Description from './Description';

const ClassRegister = () => {
  const explainTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const scheduleTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [explanation, setExplanation] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>();
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>();
  const [recommend, setRecommend] = useState('');
  const [personnel, setPersonnelChange] = useState('');
  const [amount, setAmount] = useState('');
  const [defaultPlace, setDefaultPlace] = useState('');
  const [detailPlace, setDetailPlace] = useState('');

  const handlePersonnelChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록
    if (!e.target.value.match(/\D/g)) {
      setPersonnelChange(e.target.value);
    }
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록
    if (!e.target.value.match(/\D/g)) {
      setAmount(e.target.value);
    }
  };

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
      setExplanation(textArea.value);
    }
  };

  const handleRecommendChange = () => {
    const textArea = scheduleTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
      setRecommend(textArea.value);
    }
  };

  const handleDefaultPlace = () => {
    console.log('여기에 도로명 주소 API 호출');
    // 받은 데이터로 state 설정
    setDefaultPlace('이런 값으로~');
  };

  const handleDetailPlace = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailPlace(e.target.value);
  };
  return (
    <>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 개설"></Header.Title>
      </Header.Root>

      <div className={styles.containerStyle}>
        {/* 클래스명 */}
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
            value={explanation}
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
            value={recommend}
            onInput={handleRecommendChange}
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

        {/* 모집 인원 */}
        <section className={styles.personnelSectionStyle}>
          <Description title="모집 인원" subTitle="원활한 클래스 진행을 위해 최대 인원을 알려주세요" />
          <div className={styles.personnelContainerStyle}>
            <Input placeholder="0" value={personnel} onChange={handlePersonnelChange} />
            <Text tag="b5" className={styles.personnelTextStyle}>
              명
            </Text>
          </div>
        </section>

        {/* 클래스 장소 */}
        <section className={styles.placeSectionStyle}>
          <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
          <Flex width="100%" direction="column" gap="0.8rem" onClick={handleDefaultPlace}>
            <Flex width="100%" justify="spaceBetween" align="center" className={styles.searchContainerStyle}>
              <Text tag="b5" color="gray5">
                {defaultPlace ? defaultPlace : '지번, 도로명, 건물명으로 검색해 주세요'}
              </Text>
              {!defaultPlace && <IcSearchGray width={24} />}
            </Flex>
            <Input value={detailPlace} onChange={handleDetailPlace} />
          </Flex>
        </section>

        <section className={styles.amountSectionStyle}>
          <Description title="수강료" subTitle="전체 회차를 포함한 최종 금액을 알려주세요" />
          <div className={styles.amountContainerStyle}>
            <Input placeholder="0" value={amount} onChange={handleAmountChange} />
            <Text tag="b5" className={styles.amountTextStyle}>
              원
            </Text>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClassRegister;
