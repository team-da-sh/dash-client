import { useParams } from 'react-router-dom';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
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
    <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
      <Text tag="b2_m_long" color="gray8">
        {getStatusMessage(status, data?.dDay)}
      </Text>

      <ClassInfo
        name={data.lessonName}
        location={data.location}
        locationDetail={data.detailedAddress}
        teacherNickname={data.nickname}
        level={data.level}
        lessonRound={data.rounds}
      />
    </div>
  );
};

export default ClassContent;
