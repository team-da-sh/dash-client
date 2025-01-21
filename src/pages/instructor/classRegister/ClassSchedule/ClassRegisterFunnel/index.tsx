import { useState } from 'react';
import DateStep from '@/pages/instructor/classRegister/ClassSchedule/DateStep';
import TimeStep from '@/pages/instructor/classRegister/ClassSchedule/TimeStep';
import { funnelContainerStyle } from '@/pages/instructorRegister/InstructorRegisterFunnel/index.css';
import { FunnelProps, StepProps } from '@/pages/search/types/funnel';

interface ClassRegisterFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const ClassRegisterFunnel = ({ Funnel, Step }: ClassRegisterFunnelProps) => {
  const [startDate, setStartDate] = useState<string>('');

  return (
    <div className={funnelContainerStyle}>
      <Funnel>
        <Step name="1">
          <DateStep startDate={startDate} setStartDate={setStartDate} />
        </Step>
        <Step name="2">
          <TimeStep />
        </Step>
      </Funnel>
    </div>
  );
};

export default ClassRegisterFunnel;
