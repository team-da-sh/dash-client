import type { ReactNode } from 'react';
import { tabButtonStyle } from '@/shared/components/Tab/index.css';

interface TabButtonProps {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  colorScheme: 'primary' | 'secondary' | 'tertiary' | 'plain';
}

const TabButton = ({ children, isSelected, onClick, colorScheme = 'primary' }: TabButtonProps) => {
  return (
    <button
      className={tabButtonStyle({
        colorScheme,
        state: isSelected ? 'active' : 'inactive',
      })}
      onClick={onClick}
      role="tab"
      aria-selected={isSelected}>
      {children}
    </button>
  );
};

export default TabButton;
