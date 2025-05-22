import * as styles from '@/pages/instructor/classRegister/components/ClassSchedule/TimeStep/TimeControl/timeControl.css';
import IcArrowDownGray1032 from '@/shared/assets/svg/IcArrowDownGray1032';
import IcArrowUpGray1032 from '@/shared/assets/svg/IcArrowUpGray1032';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';

interface TimeControlProps {
  label: string;
  value: number | string;
  onIncrease: () => void;
  onDecrease: () => void;
  disableIncrease?: boolean;
  disableDecrease?: boolean;
}
const TimeControl = ({ label, value, onIncrease, onDecrease, disableIncrease, disableDecrease }: TimeControlProps) => (
  <Flex direction="column" width="100%" align="center" gap="0.4rem">
    <button
      onClick={onIncrease}
      className={styles.buttonStyle}
      disabled={disableIncrease}
      style={disableIncrease ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
      <IcArrowUpGray1032 width={'3.2rem'} />
    </button>
    <div className={styles.timeValueWrapperStyle}>
      <Head level="h2" tag="b1_sb">
        {label === 'minute' ? (value === 0 ? '00' : '30') : value}
      </Head>
    </div>
    <button
      onClick={onDecrease}
      className={styles.buttonStyle}
      disabled={disableDecrease}
      style={disableDecrease ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
      <IcArrowDownGray1032 width={'3.2rem'} />
    </button>
  </Flex>
);

export default TimeControl;
