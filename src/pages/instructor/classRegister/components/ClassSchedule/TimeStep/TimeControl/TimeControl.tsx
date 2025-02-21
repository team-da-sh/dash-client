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
}
const TimeControl = ({ label, value, onIncrease, onDecrease }: TimeControlProps) => (
  <Flex direction="column" width="100%" align="center" gap="0.4rem">
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
