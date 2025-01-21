import { loadTossPayments, ANONYMOUS } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';
import * as styles from '@/pages/reservation/components/TossPayments/index.css';

const generateRandomString = () => window.btoa(String(Math.random())).slice(0, 20);

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';

export const CheckoutPage = () => {
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<any>(null);
  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: 45_000,
  });

  console.log(ready); // 빌드 에러 잡는 용 추후 사용 예정
  console.log(setAmount); // 빌드 에러 잡는 용 추후 사용 예정

  useEffect(() => {
    const fetchPaymentWidgets = async () => {
      const tossPayments = await loadTossPayments(clientKey);
      const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      setWidgets(widgets);
    };

    fetchPaymentWidgets();
  }, [clientKey]);

  useEffect(() => {
    const renderPaymentWidgets = async () => {
      if (widgets == null) return;

      await widgets.setAmount(amount);

      await Promise.all([
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);

      setReady(true);
    };

    renderPaymentWidgets();
  }, [widgets]);

  const handlePayment = async () => {
    try {
      await widgets?.requestPayment({
        orderId: generateRandomString(),
        orderName: '토스 티셔츠 외 2건',
        customerName: '김토스',
        customerEmail: 'customer123@gmail.com',
        successUrl: window.location.origin + '/reservation/payments/success' + window.location.search,
        failUrl: window.location.origin + '/reservation/payments/fail' + window.location.search,
      });
    } catch (error) {
      // TODO: 에러 처리
      console.error('결제 요청 중 오류 발생:', error);
    }
  };

  return (
    <div className={`${styles.wrapper} ${styles.w100}`}>
      <div className={`${styles.maxW540} ${styles.w100}`}>
        <div id="payment-method" className={styles.w100} />
        <div id="agreement" className={styles.w100} />
        <div className={`${styles.btnWrapper} ${styles.w100}`}>
          <button className={`${styles.btn} ${styles.btnPrimary} ${styles.w100}`} onClick={handlePayment}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};
