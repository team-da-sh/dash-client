import * as styles from '@/app/mypage/(student)/reservations/[id]/components/ApplicantInfo/applicantInfo.css';
import Text from '@/common/components/Text/Text';
import { formatDateToKRWithTime } from '@/shared/utils/date';
import { formatPhoneNumberNoSpace } from '@/shared/utils/formatPhoneNumber';

interface ApplicantInfoPropTypes {
  memberName: string;
  memberPhoneNumber: string;
  reservationDateTime?: string;
}

const ApplicantInfo = ({ memberName, memberPhoneNumber, reservationDateTime = '' }: ApplicantInfoPropTypes) => {
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
      {reservationDateTime && (
        <div className={styles.textWrapper}>
          <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
            신청일시
          </Text>
          <Text tag="b3_m" color="gray10">
            {formatDateToKRWithTime(reservationDateTime)}
          </Text>
        </div>
      )}
    </section>
  );
};

export default ApplicantInfo;
