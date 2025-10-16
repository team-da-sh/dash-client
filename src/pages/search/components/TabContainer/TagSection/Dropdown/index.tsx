import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import useOutsideClick from '@/shared/hooks/useOutsideClick';
import * as styles from './index.css';

interface DropdownContextPropTypes {
  open: boolean;
  handleToggleOpen: () => void;
  handleToggleClose: () => void;
}

const DropdownContext = createContext<DropdownContextPropTypes | null>(null);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Select 컴포넌트는 Select.Root 내에서 사용되어야 합니다.');
  }
  return context;
};

interface DropdownRootPropTypes {
  children: ReactNode;
}
const DropdownRoot = ({ children }: DropdownRootPropTypes) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  const ref = useOutsideClick(handleClose);

  const contextValue: DropdownContextPropTypes = {
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

interface DropdownTriggerPropTypes {
  children: ReactNode;
}
const DropdownTrigger = ({ children }: DropdownTriggerPropTypes) => {
  const { handleToggleOpen } = useDropdownContext();

  return (
    <button onClick={handleToggleOpen} className={styles.dropdownTrigger}>
      {children}
    </button>
  );
};

interface DropdownContentPropTypes {
  children: ReactNode;
}

const DropdownContent = ({ children }: DropdownContentPropTypes) => {
  const { open, handleToggleClose } = useDropdownContext();

  return (
    <ul onClick={handleToggleClose} className={styles.dropdownContent} aria-hidden>
      {open && children}
    </ul>
  );
};

interface DropdownItemPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const DropdownItem = ({ label, onClick, ...props }: DropdownItemPropTypes) => {
  const { handleToggleClose } = useDropdownContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
