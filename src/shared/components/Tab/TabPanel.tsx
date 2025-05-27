import type { ReactNode } from 'react';
import { tabPanelStyle } from '@/shared/components/Tab/index.css';

interface TabPanelPropTypes {
  children: ReactNode;
  isSelected: boolean;
  className?: string;
}

const TabPanel = ({ children, isSelected, className }: TabPanelPropTypes) => {
  if (!isSelected) return null;
  return (
    <div className={`${tabPanelStyle} ${className}`} role="tabpanel">
      {children}
    </div>
  );
};

export default TabPanel;
