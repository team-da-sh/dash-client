import { bookerComponentStyle } from '@/pages/reservation/components/ApplicantInfo/index.css';
import InfoRow from '@/pages/reservation/components/InfoRow';
import { ApplicantInfoProps } from '@/pages/reservation/types';

const ApplicantInfo = ({ studentName, studentPhoneNumber }: ApplicantInfoProps) => {
  return (
    <div className={bookerComponentStyle}>
      <InfoRow label="이름" value={studentName} />

      <InfoRow label="전화번호" value={studentPhoneNumber} />
    </div>
  );
};

export default ApplicantInfo;
