import { funnelContainerStyle } from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterFunnel/classRegisterFunnel.css';
import DateStep from '@/pages/instructor/classRegister/components/ClassSchedule/DateStep/DateStep';
import TimeStep from '@/pages/instructor/classRegister/components/ClassSchedule/TimeStep/TimeStep';
import { FunnelProps, StepProps } from '@/pages/search/types/funnel';

interface ClassRegisterBottomSheetProps {
  // currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  // setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
  // onClose: () => void;
  startDate: string;
  hour: number;
  minute: number;
  ampm: string;
  setStartDate: (value: string) => void;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  setMinute: React.Dispatch<React.SetStateAction<number>>;
  setAmpm: (value: string) => void;
  setSelectedTime: (value: number | null) => void;
  selectedTime: number | null;
}

const ClassRegisterFunnel = ({
  Funnel,
  Step,
  startDate,
  hour,
  minute,
  ampm,
  setStartDate,
  setHour,
  setMinute,
  setAmpm,
  setSelectedTime,
  selectedTime,
}: ClassRegisterBottomSheetProps) => {
  return (
    <div className={funnelContainerStyle}>
      <Funnel>
        <Step name="1">
          <DateStep startDate={startDate} setStartDate={setStartDate} />
        </Step>
        <Step name="2">
          <TimeStep
            hour={hour}
            minute={minute}
            ampm={ampm}
            setHour={setHour}
            setMinute={setMinute}
            setAmpm={setAmpm}
            setSelectedTime={setSelectedTime}
            selectedTime={selectedTime}
          />
        </Step>
      </Funnel>
    </div>
  );
};

export default ClassRegisterFunnel;
