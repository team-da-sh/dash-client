import {
  bookerComponentStyle,
  textLabelStyle,
  rowStyle,
} from '@/pages/reservation/components/ApplicantInfo/applicantInfo.css';
import Text from '@/common/components/Text/Text';
import { formatPhoneNumberNoSpace } from '@/shared/utils/formatPhoneNumber';

interface ApplicantInfoPropTypes {
  memberName: string;
  memberPhoneNumber: string;
}

const ApplicantInfo = ({ memberName, memberPhoneNumber }: ApplicantInfoPropTypes) => {
  return (
    <div className={bookerComponentStyle}>
      <div className={rowStyle}>
        <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
          이름
        </Text>
        <Text tag="b3_m" color="gray10">
          {memberName}
        </Text>
      </div>
      <div className={rowStyle}>
        <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
          전화번호
        </Text>
        <Text tag="b3_m" color="gray10">
          {formatPhoneNumberNoSpace(memberPhoneNumber)}
        </Text>
      </div>
    </div>
  );
};

export default ApplicantInfo;
