import clsx from 'clsx';
import type { ReactNode } from 'react';
import { tabListStyle } from '@/shared/components/Tab/index.css';

interface TabListProps {
  children: ReactNode;
  className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
  return <div className={clsx(tabListStyle, className)}>{children}</div>;
};

export default TabList;
