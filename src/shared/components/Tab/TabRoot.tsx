import type { ReactNode } from 'react';
import { tabRootStyle } from '@/shared/components/Tab/index.css';

interface TabRootPropTypes {
  children: ReactNode;
  className?: string;
}

const TabRoot = ({ children, className }: TabRootPropTypes) => {
  return <div className={`${tabRootStyle} ${className}`}>{children}</div>;
};

export default TabRoot;
