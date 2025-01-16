import * as styles from '@/pages/instructor/classList/index.css';
import Header from '@/components/Header';

const ClassList = () => {
  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>
    </div>
  );
};

export default ClassList;
