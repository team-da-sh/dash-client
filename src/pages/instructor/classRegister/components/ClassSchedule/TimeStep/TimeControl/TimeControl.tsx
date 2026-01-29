import {
  timeControlWrapperStyle,
  timeValueWrapperStyle,
  buttonStyle,
} from '@/pages/instructor/classRegister/components/ClassSchedule/TimeStep/TimeControl/timeControl.css';
import Head from '@/common/components/Head/Head';
import IcArrowDownGray1032 from '@/shared/assets/svg/IcArrowDownGray1032';
import IcArrowUpGray1032 from '@/shared/assets/svg/IcArrowUpGray1032';

interface TimeControlProps {
  label: string;
  value: number | string;
  onIncrease: () => void;
  onDecrease: () => void;
  disableIncrease?: boolean;
  disableDecrease?: boolean;
}
const TimeControl = ({ label, value, onIncrease, onDecrease, disableIncrease, disableDecrease }: TimeControlProps) => (
  <div className={timeControlWrapperStyle}>
    <button
      onClick={onIncrease}
      className={buttonStyle}
      disabled={disableIncrease}
      style={disableIncrease ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
      <IcArrowUpGray1032 width={'3.2rem'} />
    </button>
    <div className={timeValueWrapperStyle}>
      <Head level="h2" tag="b1_sb">
        {label === 'minute' ? (value === 0 ? '00' : '30') : value}
      </Head>
    </div>
    <button
      onClick={onDecrease}
      className={buttonStyle}
      disabled={disableDecrease}
      style={disableDecrease ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
      <IcArrowDownGray1032 width={'3.2rem'} />
    </button>
  </div>
);

export default TimeControl;
