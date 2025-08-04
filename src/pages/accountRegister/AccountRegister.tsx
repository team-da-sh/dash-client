import * as styles from '@/pages/accountRegister/accountRegister.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

const AccountRegister = () => {
  return (
    <form>
      <Divider color="gray3" />
      <div className={styles.containerStyle}>
        <div className={styles.titleStyle}>
          <Head level="h1" tag="h3_sb">
            계좌 등록하기
          </Head>
          <Text tag="b2_m" color="gray7">
            수업료를 입금받은 계좌를 등록해요
          </Text>
        </div>

        <div className={styles.inputContainerStyle}>
          <Head level="h3" tag="b2_sb">
            예금주명
          </Head>
          <Input placeholder="장세희" />
        </div>

        <div className={styles.inputContainerStyle}>
          <Head level="h3" tag="b2_sb">
            계좌 정보
          </Head>
          <Input placeholder="은행 선택" />
          <Input placeholder="계좌번호 입력" />
        </div>
      </div>

      <div className={styles.buttonContainerStyle}>
        <BoxButton variant="primary" type="button">
          다음
        </BoxButton>
      </div>
    </form>
  );
};

export default AccountRegister;
