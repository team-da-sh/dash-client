import { bookerComponentStyle } from '@/pages/reservation/ApplicantInfo/index.css';
import InfoRow from '@/pages/reservation/InfoRow';
import { MY_RESERVATION_DATA } from '@/mocks/mockMyReservationData';

const ApplicantInfo = () => {
  const { bookerName, bookerPhoneNumber } = MY_RESERVATION_DATA;

  return (
    <div className={bookerComponentStyle}>
      <InfoRow label="이름" value={bookerName} />

      <InfoRow label="전화번호" value={bookerPhoneNumber} />
    </div>
  );
};

export default ApplicantInfo;
