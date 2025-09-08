import { useParams } from 'react-router-dom';
import { useGetMyPage } from '@/pages/mypage/apis/queries';
import { useCancelReservation } from '@/pages/mypage/components/CancelConfirmPage/apis/query/useCancelReservation';
import * as styles from '@/pages/mypage/components/CancelConfirmPage/cancelConfirmPage.css';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import { CANCEL_CONFIRM_MESSAGE } from '@/pages/mypage/constants/modalMessage';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const CancelConfirmPage = () => {
  const { id } = useParams<{ id: string }>();
  const reservationId = Number(id);

  const { data: reservationData } = useGetReservationsDetail(reservationId);
  const { data: myPageData } = useGetMyPage();

  const { openModal } = useModalStore();
  const { mutate: cancelReservation, isPending } = useCancelReservation();

  const handleConfirm = () => {
    openModal(({ close }) => (
      <Modal
        content={CANCEL_CONFIRM_MESSAGE}
        type="single"
        onClose={close}
        onClickHandler={() => {
          cancelReservation({
            reservationId,
            requestData: {
              deposited: false,
            },
          });
        }}
      />
    ));
  };

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
                name={reservationData?.lessonName || ''}
                location={reservationData?.location || ''}
                locationDetail={reservationData?.detailedAddress}
                teacherNickname={reservationData?.nickname || ''}
                level={reservationData?.level || ''}
                lessonRound={reservationData?.rounds}
              />
            </div>
          </div>

          <div className={sprinkles({ pt: 24, pr: 20, pb: 24, pl: 20 })}>
            <BoxButton variant="primary" onClick={handleConfirm} disabled={isPending}>
              {isPending ? '처리 중...' : '취소하기'}
            </BoxButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirmPage;
