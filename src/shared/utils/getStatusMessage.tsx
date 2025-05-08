import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

type Status = 'upcoming' | 'ongoing' | 'completed';

export const getStatusMessage = (status: Status, remainingDays: number | undefined) => {
  switch (status) {
    case 'upcoming':
      return (
        <div className={sprinkles({ display: 'flex', gap: 2, alignItems: 'center' })}>
          {'클래스 시작까지'}
          <Text tag="b2_sb" color="main4">
            {remainingDays}일
          </Text>
          {'남았어요'}
        </div>
      );
    case 'ongoing':
      return (
        <div className={sprinkles({ display: 'flex', gap: 2, alignItems: 'center' })}>
          {'클래스가'}
          <Text tag="b2_sb" color="main4">
            진행 중
          </Text>
          {'이에요'}
        </div>
      );
    case 'completed':
      return <>클래스 수강이 완료되었어요</>;
    default:
      return '';
  }
};
