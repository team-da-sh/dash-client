import clsx from 'clsx';
import type { ReactNode } from 'react';
import { tabListStyle } from '@/shared/components/Tab/index.css';

interface TabListProps {
  children: ReactNode;
  className?: string;
  gap?: 'fixed' | 'responsive';
}

const TabList = ({ children, className, gap = 'fixed' }: TabListProps) => {
  return <div className={clsx(tabListStyle({ gap }), className)}>{children}</div>;
};

export default TabList;
