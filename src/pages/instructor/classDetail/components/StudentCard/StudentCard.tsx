import { useQueryClient } from '@tanstack/react-query';
import type { TabStatus } from '@/pages/instructor/classDetail/ClassDetail';
import { useLessonApproveMutation, useLessonCancelMutation } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/components/StudentCard/studentCard.css';
import type { Student } from '@/pages/instructor/classDetail/types/api';
import { formatPhoneNumber } from '@/pages/instructor/utils/format';
import { STATUS_KOREAN_MAP } from '@/pages/mypage/components/mypageReservation/constants/statusMap';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import ApplyTag from '@/shared/components/ApplyTag/ApplyTag';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { teacherKeys } from '@/shared/constants/queryKey';
import { formatDateTime } from '@/shared/utils/timeUtils';

const STATUS_BUTTON_MAP: Record<
  Exclude<ReservationStatus, 'ALL'>,
  { text: string; variant: 'outline' | 'quaternary' }
> = {
  PENDING_APPROVAL: { text: '승인 확정', variant: 'outline' },
  APPROVED: { text: '승인 대기로 변경', variant: 'quaternary' },
  PENDING_CANCELLATION: { text: '취소 확정', variant: 'outline' },
  CANCELLED: { text: '취소 대기로 변경', variant: 'quaternary' },
  COMPLETED: { text: '완료됨', variant: 'quaternary' },
};

interface StudentCardPropTypes {
  studentData: Student;
  index: number;
  lessonId: number;
  selectedTab: TabStatus;
}

const StudentCard = ({ studentData, index, lessonId, selectedTab }: StudentCardPropTypes) => {
  const { openModal } = useModalStore();

  const { text: buttonText, variant: buttonVariant } = STATUS_BUTTON_MAP[studentData.reservationStatus];

  const status = studentData.reservationStatus;

  const { mutate: approveMutate, isPending: successPending } = useLessonApproveMutation();
  const { mutate: cancelMutate, isPending: cancelPending } = useLessonCancelMutation();

  const queryClient = useQueryClient();

  const handleStatusChangeClick = () => {
    if (status === 'APPROVED' || status === 'PENDING_APPROVAL') {
      approveMutate(
        { lessonId, reservationId: studentData.reservationId },
        {
          onSuccess: (data) => {
            if (data.isFull) {
              openModal(({ close }) => <Modal type="single" content={'클래스 정원이 다 찼어요.'} onClose={close} />);
            } else {
              notify({
                message: status === 'APPROVED' ? '승인 대기로 변경되었어요.' : '승인이 확정되었어요.',
                icon: 'success',
              });
              queryClient.invalidateQueries({
                queryKey: teacherKeys.me._ctx.lesson._ctx.students(lessonId, selectedTab).queryKey,
              });
            }
          },
        }
      );
    } else {
      if (status === 'PENDING_CANCELLATION') {
        openModal(({ close }) => (
          <Modal
            type="default"
            content={`${studentData.name}님의 취소를 확인하셨나요?`}
            onClose={close}
            onClickHandler={() =>
              cancelMutate(
                { lessonId, reservationId: studentData.reservationId },
                {
                  onSuccess: () => {
                    notify({ message: '취소가 완료되었어요.', icon: 'success' });
                    queryClient.invalidateQueries({
                      queryKey: teacherKeys.me._ctx.lesson._ctx.students(lessonId, selectedTab).queryKey,
                    });
                  },
                }
              )
            }
          />
        ));
      } else {
        cancelMutate(
          { lessonId, reservationId: studentData.reservationId },
          {
            onSuccess: () => {
              notify({ message: '취소 대기로 변경되었어요.', icon: 'success' });
              queryClient.invalidateQueries({
                queryKey: teacherKeys.me._ctx.lesson._ctx.students(lessonId, selectedTab).queryKey,
              });
            },
          }
        );
      }
    }
  };

  return (
    <section className={styles.cardContainerStyle}>
      <section className={styles.leftWrapper}>
        <Head level="h2" tag="b1_sb">
          {index + 1}
        </Head>

        <div className={styles.infoWrapper}>
          <div className={styles.nameWrapper}>
            <Head level="h2" tag="b1_sb">
              {studentData.name}
            </Head>
            <ApplyTag variant={studentData.reservationStatus}>
              {STATUS_KOREAN_MAP[studentData.reservationStatus]}
            </ApplyTag>
          </div>
          <Text tag="b3_r" color="gray7">
            {formatPhoneNumber(studentData.phoneNumber)}
          </Text>
        </div>
      </section>

      <section className={styles.rightWrapper}>
        <Text tag="c1_r" color="gray9">
          {formatDateTime(studentData.reservationDateTime)}
        </Text>
        <BoxButton variant={buttonVariant} onClick={handleStatusChangeClick} disabled={successPending || cancelPending}>
          {buttonText}
        </BoxButton>
      </section>
    </section>
  );
};

export default StudentCard;
