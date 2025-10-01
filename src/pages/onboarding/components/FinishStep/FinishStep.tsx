import * as styles from '@/pages/onboarding/components/FinishStep/finishStep.css';
import { ClearGif } from '@/shared/assets/gif';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface FinishStepProps {
  name: string;
}

const FinishStep = ({ name }: FinishStepProps) => {
  return (
    <div className={styles.containerStyle}>
      <div className={styles.wrapperStyle}>
        <Head level="h1" tag="h3_sb">
          환영해요 {name} 님 <br /> 이제 몸을 풀어볼까요?
        </Head>
        <Text tag="b2_m" color="gray7">
          취향에 꼭 맞는 댄스 클래스를 둘러보고 신청할 수 있어요
        </Text>
      </div>

      <div className={styles.gifWrapperStyle}>
        <img src={ClearGif} width={244} />
      </div>
    </div>
  );
};

export default FinishStep;
