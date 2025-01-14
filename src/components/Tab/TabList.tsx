import { ReactNode } from 'react';
import { tabListStyle } from '@/components/Tab/index.css';

interface TabListProps {
  children: ReactNode;
  className?: string;
}

const TabList = ({ children }: TabListProps) => {
  return <div className={tabListStyle}>{children}</div>;
};

export default TabList;
