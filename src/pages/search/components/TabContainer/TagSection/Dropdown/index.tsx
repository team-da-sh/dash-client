import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import useOutsideClick from '@/shared/hooks/useOutsideClick';
import * as styles from './index.css';

interface DropdownContextPropsTypes {
  open: boolean;
  handleToggleOpen: () => void;
  handleToggleClose: () => void;
}

const DropdownContext = createContext<DropdownContextPropsTypes | null>(null);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Select 컴포넌트는 Select.Root 내에서 사용되어야 합니다.');
  }
  return context;
};

interface DropdownRootPropsTypes {
  children: ReactNode;
}
const DropdownRoot = ({ children }: DropdownRootPropsTypes) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  const ref = useOutsideClick(handleClose);

  const contextValue: DropdownContextPropsTypes = {
    open,
    handleToggleOpen,
    handleToggleClose: handleClose,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div ref={ref} className={styles.dropdownRoot}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

interface DropdownTriggerPropsTypes {
  children: ReactNode;
}
const DropdownTrigger = ({ children }: DropdownTriggerPropsTypes) => {
  const { handleToggleOpen } = useDropdownContext();

  return (
    <button onClick={handleToggleOpen} className={styles.dropdownTrigger}>
      {children}
    </button>
  );
};

interface DropdownContentPropsTypes {
  children: ReactNode;
}

const DropdownContent = ({ children }: DropdownContentPropsTypes) => {
  const { open, handleToggleClose } = useDropdownContext();

  return (
    <ul onClick={handleToggleClose} className={styles.dropdownContent}>
      {open && children}
    </ul>
  );
};

interface DropdownItemPropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DropdownItem = ({ label, onClick, ...props }: DropdownItemPropsTypes) => {
  const { handleToggleClose } = useDropdownContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(event);
    handleToggleClose();
  };

  return (
    <li>
      <button {...props} className={styles.dropdownItem} onClick={handleClick}>
        <p className={`${styles.dropdownItemText}`}>{label}</p>
      </button>
    </li>
  );
};

const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
};

export default Dropdown;
