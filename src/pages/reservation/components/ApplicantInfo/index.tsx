import { bookerComponentStyle } from '@/pages/reservation/components/ApplicantInfo/index.css';
import InfoRow from '@/pages/reservation/components/InfoRow';

interface ApplicantInfoProps {
  bookerName?: string;
  bookerPhoneNumber?: string;
}
const ApplicantInfo = ({ bookerName = '', bookerPhoneNumber = '' }: ApplicantInfoProps) => {
  return (
    <div className={bookerComponentStyle}>
      <InfoRow label="이름" value={bookerName} />

      <InfoRow label="전화번호" value={bookerPhoneNumber} />
    </div>
  );
};

export default ApplicantInfo;
