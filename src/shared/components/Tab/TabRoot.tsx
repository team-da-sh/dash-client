import { ReactNode } from 'react';
import { tabRootStyle } from '@/shared/components/Tab/index.css';

interface TabRootProps {
  children: ReactNode;
  className?: string;
}

const TabRoot = ({ children, className }: TabRootProps) => {
  return <div className={`${tabRootStyle} ${className}`}>{children}</div>;
};

export default TabRoot;
