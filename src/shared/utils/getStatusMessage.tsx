import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';

type Status = 'upcoming' | 'ongoing' | 'completed';

export const getStatusMessage = (status: Status, remainingDays: number | undefined) => {
  switch (status) {
    case 'upcoming':
      return (
        <Flex gap="0.2rem">
          {'클래스 시작까지'}
          <Head tag="h6_sb" color="main4">
            {remainingDays} 일
          </Head>
          {'남았어요'}
        </Flex>
      );
    case 'ongoing':
      return (
        <Flex gap="0.2rem">
          {'클래스가'}
          <Head tag="h6_sb" color="main4">
            진행 중
          </Head>
          {'이에요'}
        </Flex>
      );
    case 'completed':
      return <>클래스 수강이 완료되었어요</>;
    default:
      return '';
  }
};
