import type { ReactNode } from 'react';
import { tabPanelStyle } from '@/shared/components/Tab/index.css';

interface TabPanelProps {
  children: ReactNode;
  isSelected: boolean;
  className?: string;
}

const TabPanel = ({ children, isSelected, className }: TabPanelProps) => {
  if (!isSelected) return null;
  return (
    <div className={`${tabPanelStyle} ${className}`} role="tabpanel">
      {children}
    </div>
  );
};

export default TabPanel;
