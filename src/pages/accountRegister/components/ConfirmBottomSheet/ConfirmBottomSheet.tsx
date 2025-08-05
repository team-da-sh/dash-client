import * as styles from '@/pages/accountRegister/components/ConfirmBottomSheet/confirmBottomSheet.css';
import SvgIcClearMain0420 from '@/shared/assets/svg/IcClearMain0420';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import useOutsideClick from '@/shared/hooks/useOutsideClick';

interface ConfirmBottomSheetPropTypes {
  onClose: () => void;
}

const ConfirmBottomSheet = ({ onClose }: ConfirmBottomSheetPropTypes) => {
  const ref = useOutsideClick(onClose);

  return (
    <div className={styles.overlayStyle}>
      <div className={styles.containerStyle} ref={ref}>
        <div className={styles.topContainerStyle}>
          <SvgIcClearMain0420 width={'4.4rem'} height={'4.4rem'} />
          <div className={styles.titleStyle}>
            <Head level="h1" tag="h5_sb">
              입력하신 내용이 맞나요?
            </Head>
            <div className={styles.subTitleStyle}>
              <Text tag="b2_m_long" color="gray7">
                수강생이 강사님의 계좌로 직접 입금해요
              </Text>
              <Text tag="b2_m_long" color="gray7" className={styles.subTitleStyle}>
                입금 오류 방지를 위해 한 번 더 확인해 주세요
              </Text>
            </div>
          </div>
        </div>

        <div className={styles.infoContainerStyle}>
          <div className={styles.infoRowStyle}>
            <Text tag="b2_m_long" color="gray6" style={{ width: '4.9rem' }}>
              예금주
            </Text>
            <Text tag="b2_m_long">주은혜</Text>
          </div>
          <div className={styles.infoRowStyle}>
            <Text tag="b2_m_long" color="gray6" style={{ width: '4.9rem' }}>
              계좌번호
            </Text>
            <div className={styles.accountNumberStyle}>
              <Text tag="b2_m_long">신한</Text>
              <Text tag="b2_m_long">4879899192818</Text>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainerStyle}>
          <BoxButton type="button" variant="secondary" className={styles.secondaryButtonCustomStyle}>
            다시 입력하기
          </BoxButton>
          <BoxButton type="submit" className={styles.primaryButtonCustomStyle}>
            등록하기
          </BoxButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBottomSheet;
