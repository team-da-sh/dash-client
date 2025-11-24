import * as styles from '@/pages/onboarding/components/FinishStep/finishStep.css';
import { ClearGif } from '@/shared/assets/gif';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface FinishStepProps {
  name: string;
  isDeleted?: boolean;
}

const FinishStep = ({ name, isDeleted }: FinishStepProps) => {
  const title = isDeleted ? `${name} 님\n돌아오신 걸 환영해요!` : `환영해요 ${name} 님\n이제 몸을 풀어볼까요?`;

  const description = isDeleted
    ? '회원님의 이전 활동 내역이 완벽하게 복구되었어요'
    : '취향에 꼭 맞는 댄스 클래스를 둘러보고 신청할 수 있어요';

  return (
    <div className={styles.containerStyle}>
      <div className={styles.wrapperStyle}>
        <Head level="h1" tag="h3_sb">
          {title.split('\n').map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </Head>

        <Text tag="b2_m" color="gray7">
          {description}
        </Text>
      </div>

      <div className={styles.gifWrapperStyle}>
        <img src={ClearGif} width={244} alt="완료 애니메이션" />
      </div>
    </div>
  );
};

export default FinishStep;
