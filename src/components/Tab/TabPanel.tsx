import { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  isSelected: boolean;
  className?: string;
}

export const TabPanel = ({ children, isSelected, className }: TabPanelProps) => {
  if (!isSelected) return null;
  return (
    <div className={`${className}`} role="tabpanel">
      {children}
    </div>
  );
};

export default TabPanel;
