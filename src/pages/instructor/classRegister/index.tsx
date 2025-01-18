import * as styles from '@/pages/instructor/classRegister/index.css';
import Header from '@/components/Header';
import Description from './Description';

const ClassRegister = () => {
  return (
    <>
      <Header.Root>
        <Header.BackIcon />
        <Header.Title title="클래스 개설"></Header.Title>
      </Header.Root>
      <div className={styles.containerStyle}>
        <Description title="클래스명" subTitle="돋보일 수 있는 클래스명을 최대 30자 입력해 주세요" />
      </div>
    </>
  );
};

export default ClassRegister;
