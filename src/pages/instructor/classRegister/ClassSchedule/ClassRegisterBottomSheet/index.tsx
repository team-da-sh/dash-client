import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import * as styles from './index.css';

const ClassRegisterBottomSheet = () => {
  return (
    <div className={styles.bottomSheetContainerStyle}>
      <div className={styles.mainWrapperStyle}>
        <Header.Root isColor={true} className={styles.headerStyle}>
          <Header.BackIcon />
          <Header.Title title="날짜 선택" />
          <Header.CloseIcon />
        </Header.Root>

        <div className={styles.buttonWrapperStyle}></div>
        <BoxButton>다음</BoxButton>
      </div>
    </div>
  );
};

export default ClassRegisterBottomSheet;
