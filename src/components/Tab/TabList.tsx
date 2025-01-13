import { ReactNode } from "react";
import * as styles from '@/components/Tab/index.css';

interface TabListProps {
  children: ReactNode;
  className?: string;
}

export const TabList = ({ children, className }: TabListProps) => {
  return <div className={`${styles.tabList} ${className}`}>{children}</div>;
};

export default TabList;