import * as styles from '@/pages/reservation/components/ApplicantInfo/applicantInfo.css';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { formatPhoneNumberNoSpace } from '@/shared/utils/formatPhoneNumber';
import { formatDateTime } from '@/shared/utils/timeCalculate';

interface ApplicantInfoPropTypes {
  memberName: string;
  memberPhoneNumber: string;
  reservationDateTime: string;
}

const ApplicantInfo = ({ memberName, memberPhoneNumber, reservationDateTime }: ApplicantInfoPropTypes) => {
  return (
    <div className={styles.bookerComponentStyle}>
      <div className={sprinkles({ display: 'flex', gap: 12 })}>
        <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
          이름
        </Text>
        <Text tag="b3_m" color="gray10">
          {memberName}
        </Text>
      </div>
      <div className={sprinkles({ display: 'flex', gap: 12 })}>
        <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
          전화번호
        </Text>
        <Text tag="b3_m" color="gray10">
          {formatPhoneNumberNoSpace(memberPhoneNumber)}
        </Text>
      </div>
      <div className={sprinkles({ display: 'flex', gap: 12 })}>
        <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
          신청일시
        </Text>
        <Text tag="b3_m" color="gray10">
          {formatDateTime(reservationDateTime)}
        </Text>
      </div>
    </div>
  );
};

export default ApplicantInfo;
