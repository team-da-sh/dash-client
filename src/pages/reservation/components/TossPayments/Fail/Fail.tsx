import { useSearchParams } from 'react-router-dom';
import * as styles from '@/pages/reservation/components/TossPayments/tossPayments.css';
import { sprinkles } from '@/shared/styles/sprinkles.css';

export const FailPage = () => {
  const [searchParams] = useSearchParams();
  const errorCode = searchParams.get('code');
  const errorMessage = searchParams.get('message');

  return (
    <div className={`${styles.wrapper} ${styles.w100}`}>
      <div
        className={`${sprinkles({ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' })} ${styles.maxW540}`}>
        <img src="https://static.toss.im/lotties/error-spot-apng.png" width="120" height="120" />
        <h2 className={styles.title}>결제를 실패했어요</h2>
        <div className={`${styles.responseSection} ${styles.w100}`}>
          <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
            <span className={styles.responseLabel}>code</span>
            <span id="error-code" className={styles.responseText}>
              {errorCode}
            </span>
          </div>
          <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
            <span className={styles.responseLabel}>message</span>
            <span id="error-message" className={styles.responseText}>
              {errorMessage}
            </span>
          </div>
        </div>

        <div className={`${styles.buttonGroup} ${styles.w100}`}>
          <a
            className={styles.btn}
            href="https://developers.tosspayments.com/sandbox"
            target="_blank"
            rel="noreferrer noopener">
            다시 테스트하기
          </a>
          <div className={sprinkles({ display: 'flex', gap: 15 })}>
            <a
              className={`${styles.btn} ${styles.w100}`}
              href="https://docs.tosspayments.com/reference/error-codes"
              target="_blank"
              rel="noreferrer noopener">
              에러코드 보기
            </a>
            <a
              className={`${styles.btn} ${styles.w100}`}
              href="https://techchat.tosspayments.com"
              target="_blank"
              rel="noreferrer noopener">
              실시간 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
