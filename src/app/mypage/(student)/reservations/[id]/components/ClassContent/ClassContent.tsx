'use client';

import { useParams } from 'next/navigation';
import { useGetReservationsDetail } from '@/app/mypage/(student)/reservations/[id]/apis/queries';
import { containerStyle } from '@/app/mypage/(student)/reservations/[id]/components/ClassContent/ClassContent.css';
import Text from '@/common/components/Text/Text';
import { getClassStatus } from '@/shared/utils/date';
import { getStatusMessage } from '@/shared/utils/getStatusMessage';

const ClassContent = () => {
  const params = useParams() ?? {};
  const lessonId = Number((params as { id?: string }).id ?? 0);

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
