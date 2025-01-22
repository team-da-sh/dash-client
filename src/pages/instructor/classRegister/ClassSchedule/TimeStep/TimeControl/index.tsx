import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcArrowUpGray1032, IcArrowDownGray1032 } from '@/assets/svg';
import * as styles from './index.css';

interface TimeControlProps {
  label: string;
  value: number | string;
  onIncrease: () => void;
  onDecrease: () => void;
}
const TimeControl = ({ label, value, onIncrease, onDecrease }: TimeControlProps) => (
  <Flex direction="column" align="center" gap="0.4rem">
    <button onClick={onIncrease} className={styles.buttonStyle}>
      <IcArrowUpGray1032 width={'3.2rem'} />
    </button>
    <div className={styles.timeValueWrapperStyle}>
      <Head level="h2" tag="h6">
        {label === 'minute' ? (value === 0 ? '00' : '30') : value}
      </Head>
    </div>
    <button onClick={onDecrease} className={styles.buttonStyle}>
      <IcArrowDownGray1032 width={'3.2rem'} />
    </button>
  </Flex>
);

export default TimeControl;
