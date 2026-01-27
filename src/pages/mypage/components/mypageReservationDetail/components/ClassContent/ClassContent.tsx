import { useParams } from 'react-router-dom';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import { containerStyle } from '@/pages/mypage/components/mypageReservationDetail/components/ClassContent/ClassContent.css';
import Text from '@/common/components/Text/Text';
import { getStatusMessage } from '@/shared/utils/getStatusMessage';
import { getClassStatus } from '@/shared/utils/timeCalculate';

const ClassContent = () => {
  const lessonId = Number(useParams<{ id: string }>().id);

  const { data } = useGetReservationsDetail(lessonId);

  if (!data) {
    return <div></div>;
  }

  const lessonStartDateTime = data.rounds?.[0]?.startDateTime;
  const lessonEndDateTime = data.rounds?.[0]?.endDateTime;

  const { status } = getClassStatus(lessonStartDateTime, lessonEndDateTime);

  return (
    <div className={containerStyle}>
      <Text tag="b2_m_long" color="gray8">
        {getStatusMessage(status, data?.dDay)}
      </Text>
    </div>
  );
};

export default ClassContent;
