import { ReactNode } from "react";
import { tabButton } from '@/components/Tab/index.css';

interface TabButtonProps {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  colorScheme?: 'main' | 'dark';
}

const TabButton = ({ children, isSelected, onClick, colorScheme = 'main' }: TabButtonProps) => {
  return (
    <button
      className={tabButton({
        colorScheme,
        state: isSelected ? 'active' : 'inactive',
      })}
      onClick={onClick}
      role="tab"
      aria-selected={isSelected}
    >
      {children}
    </button>
  );
};

export default TabButton;
