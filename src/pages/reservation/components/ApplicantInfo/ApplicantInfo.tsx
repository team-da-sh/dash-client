import * as styles from '@/pages/reservation/components/ApplicantInfo/applicantInfo.css';
import { formatPhoneNumber } from '@/pages/reservation/utils/format';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ApplicantInfoPropTypes {
  memberName: string;
  memberPhoneNumber: string;
}

const ApplicantInfo = ({ memberName, memberPhoneNumber }: ApplicantInfoPropTypes) => {
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
          {formatPhoneNumber(memberPhoneNumber)}
        </Text>
      </div>
    </div>
  );
};

export default ApplicantInfo;
