import { ReactElement, ReactNode } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: ReactElement<StepProps>[];
}
