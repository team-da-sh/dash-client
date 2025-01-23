import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as styles from '@/pages/reservation/components/TossPayments/index.css';
import Flex from '@/components/Flex';

export const SuccessPage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');

  const confirmPayment = async () => {
    try {
      const response = await fetch('/sandbox-dev/api/v1/payments/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentKey,
          orderId,
          amount,
        }),
      });

      if (response.ok) {
        setIsConfirmed(true);
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  return (
    <div className={`${styles.wrapper} ${styles.w100}`}>
      {isConfirmed ? (
        <Flex direction="column" align="center" width="100%" className={styles.maxW540}>
          <img src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png" width="120" height="120" />
          <h2 className={styles.title}>결제를 완료했어요</h2>
          <div className={`${styles.responseSection} ${styles.w100}`}>
            <Flex justify="spaceBetween">
              <span className={styles.responseLabel}>결제 금액</span>
              <span id="amount" className={styles.responseText}>
                {amount}
              </span>
            </Flex>
            <Flex justify="spaceBetween">
              <span className={styles.responseLabel}>주문번호</span>
              <span id="orderId" className={styles.responseText}>
                {orderId}
              </span>
            </Flex>
            <Flex justify="spaceBetween">
              <span className={styles.responseLabel}>paymentKey</span>
              <span id="paymentKey" className={styles.responseText}>
                {paymentKey}
              </span>
            </Flex>
          </div>

          <div className={`${styles.buttonGroup} ${styles.w100}`}>
            <Flex gap="1.5rem">
              <a className={`${styles.btn} ${styles.w100}`} href="https://developers.tosspayments.com/sandbox">
                다시 테스트하기
              </a>
              <a
                className={`${styles.btn} ${styles.w100}`}
                href="https://docs.tosspayments.com/guides/v2/payment-widget/integration"
                target="_blank"
                rel="noopner noreferrer">
                결제 연동 문서가기
              </a>
            </Flex>
          </div>
        </Flex>
      ) : (
        <Flex direction="column" align="center" className={`${styles.confirmLoading} ${styles.w100} ${styles.maxW540}`}>
          <Flex direction="column" align="center">
            <img src="https://static.toss.im/lotties/loading-spot-apng.png" width="120" height="120" />
            <h2 className={`${styles.title} ${styles.textCenter}`}>결제 요청까지 성공했어요.</h2>
            <h4 className={`${styles.textCenter} ${styles.description}`}>결제 승인하고 완료해보세요.</h4>
          </Flex>
          <div className={styles.w100}>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.w100}`} onClick={confirmPayment}>
              결제 승인하기
            </button>
          </div>
        </Flex>
      )}
    </div>
  );
};
