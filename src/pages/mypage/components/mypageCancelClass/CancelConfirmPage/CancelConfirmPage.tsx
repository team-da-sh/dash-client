import { useParams } from 'react-router-dom';
import Error from '@/pages/error/Error';
import { useGetMyPage } from '@/pages/mypage/apis/queries';
import * as styles from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const CancelConfirmPage = () => {
  const { id } = useParams<{ id: string }>();
  const reservationId = Number(id);

  console.log('🔍 CancelConfirmPage Debug:');
  console.log('- URL id:', id);
  console.log('- reservationId:', reservationId);
  console.log('- reservationId type:', typeof reservationId);
  console.log('- !!reservationId:', !!reservationId);

  const reservationQuery = useGetReservationsDetail(reservationId);
  const { data: reservationData } = reservationQuery;
  const { data: myPageData } = useGetMyPage();

  console.log('🔍 useGetReservationsDetail Query State:');
  console.log('- isLoading:', reservationQuery.isLoading);
  console.log('- isFetching:', reservationQuery.isFetching);
  console.log('- isError:', reservationQuery.isError);
  console.log('- error:', reservationQuery.error);
  console.log('- data:', reservationQuery.data);
  console.log('- status:', reservationQuery.status);

  const handleConfirm = () => {
    // TODO: 취소 api 연동 + modal 추가
    window.location.href = '/mypage';
  };

  if (!reservationData || !myPageData) {
    return <Error />;
  }

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          })}>
          <div
            className={sprinkles({
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 20,
              pt: 24,
              pr: 20,
              pl: 20,
            })}>
            <div
              className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center', pb: 8 })}>
              <Head tag="h6_sb" color="black">
                해당 클래스 신청을
              </Head>
              <Head tag="h6_sb" color="main4">
                취소
              </Head>
              <Head tag="h6_sb" color="black">
                하시겠습니까?
              </Head>
            </div>
            <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
              <Head tag="h6_sb" color="black">
                신청자 정보
              </Head>
              <ApplicantInfo memberName={myPageData?.name || ''} memberPhoneNumber={myPageData?.phoneNumber || ''} />
            </div>

            <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
              <Head tag="h6_sb" color="black">
                클래스 정보
              </Head>
              <ClassInfo
                name={reservationData?.name || ''}
                location={reservationData?.location || ''}
                locationDetail={reservationData?.detailedAddress}
                teacherNickname={reservationData?.nickname || ''}
                level={reservationData?.level || ''}
                lessonRound={reservationData?.rounds}
              />
            </div>
          </div>

          <div className={sprinkles({ pt: 20, pr: 20, pb: 20, pl: 20 })}>
            <BoxButton variant="primary" onClick={handleConfirm} className={sprinkles({ width: '100%' })}>
              취소하기
            </BoxButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirmPage;
