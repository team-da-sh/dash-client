import * as styles from '@/pages/mypage/components/mypageReservationDetail/components/ApplicantInfo/applicantInfo.css';
import Text from '@/shared/components/Text/Text';
import { formatPhoneNumberNoSpace } from '@/shared/utils/formatPhoneNumber';
import { formatDateTime } from '@/shared/utils/timeCalculate';

interface ApplicantInfoPropTypes {
  memberName: string;
  memberPhoneNumber: string;
  reservationDateTime: string;
}

const ApplicantInfo = ({ memberName, memberPhoneNumber, reservationDateTime }: ApplicantInfoPropTypes) => {
  return (
    <section className={styles.bookerComponentStyle}>
      <div className={styles.textWrapper}>
        <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
          이름
        </Text>
        <Text tag="b3_m" color="gray10">
          {memberName}
        </Text>
      </div>
      <div className={styles.textWrapper}>
        <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
          전화번호
        </Text>
        <Text tag="b3_m" color="gray10">
          {formatPhoneNumberNoSpace(memberPhoneNumber)}
        </Text>
      </div>
      <div className={styles.textWrapper}>
        <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
          신청일시
        </Text>
        <Text tag="b3_m" color="gray10">
          {formatDateTime(reservationDateTime)}
        </Text>
      </div>
    </section>
  );
};

export default ApplicantInfo;
