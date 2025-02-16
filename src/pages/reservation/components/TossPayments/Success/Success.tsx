import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePostReservation } from '@/pages/reservation/apis/queries';
import * as styles from '@/pages/reservation/components/TossPayments/tossPayments.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Completion from '@/shared/components/Completion/Completion';
import Flex from '@/shared/components/Flex/Flex';
import Header from '@/shared/components/Header/Header';

export const SuccessPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paymentKey = searchParams.get('paymentKey') ?? '';
  const orderId = searchParams.get('orderId') ?? '';
  const amount = Number(searchParams.get('amount')) || 0;

  const lessonId = searchParams.get('lessonId') ?? '';

  const { mutate: classReservation } = usePostReservation();

  console.log(lessonId);

  const confirmPayment = async () => {
    if (!lessonId) {
      alert('수업 ID가 존재하지 않습니다.');
      return;
    }

    try {
      classReservation(
        { lessonId, paymentKey, orderId, amount },
        {
          onSuccess: () => {
            setIsConfirmed(true);
          },
          onError: (error) => {
            console.error('결제 승인 중 오류 발생:', error);
            alert('결제 승인이 실패했습니다. 다시 시도해주세요.');
          },
        }
      );
    } catch (error) {
      console.error('결제 처리 중 예기치 못한 오류 발생:', error);
      alert('결제 처리 중 문제가 발생했습니다.');
    }
  };

  const handleNavigate = () => {
    navigate(ROUTES_CONFIG.mypageReservation.path);
  };

  const handleHomeNavigate = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <div className={`${styles.flexCustomStyle}`}>
      {isConfirmed ? (
        <Flex direction="column" width="100%">
          <Header.Root>
            <Header.CloseIcon onClick={handleHomeNavigate} />
          </Header.Root>
          <Flex direction="column" paddingTop="5.2rem" paddingLeft="2rem" paddingRight="2rem" width="100%" gap="2.8rem">
            <Completion
              title="클래스 신청 완료!"
              subTitle="함께 리듬 탈 준비 됐나요?"
              description="신청 내역은 마이페이지의클래스 신청 내역에서 확인할 수 있어요"
            />

            <BoxButton onClick={handleNavigate}>신청 내역으로 이동</BoxButton>
          </Flex>
        </Flex>
      ) : (
        <Flex direction="column" align="center" className={`${styles.confirmLoading} ${styles.w100} ${styles.maxW540}`}>
          <Flex direction="column" align="center">
            <img src="https://static.toss.im/lotties/loading-spot-apng.png" width="120" height="120" />
            <h2 className={`${styles.title} ${styles.textCenter}`}>결제 요청까지 성공했어요.</h2>
            <h4 className={`${styles.textCenter} ${styles.description}`}>결제 승인하고 완료해보세요.</h4>
          </Flex>
          <div className={styles.buttonCustomStyle}>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.w100}`} onClick={confirmPayment}>
              결제 승인하기
            </button>
          </div>
        </Flex>
      )}
    </div>
  );
};
