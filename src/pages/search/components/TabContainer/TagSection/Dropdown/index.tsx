import { ButtonHTMLAttributes, ReactNode, createContext, useContext, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import * as styles from './index.css';

interface DropdownContextProps {
  open: boolean;
  handleToggleOpen: () => void;
  handleToggleClose: () => void;
}

const DropdownContext = createContext<DropdownContextProps | null>(null);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Select 컴포넌트는 Select.Root 내에서 사용되어야 합니다.');
  }
  return context;
};

interface DropdownRootProps {
  children: ReactNode;
}
const DropdownRoot = ({ children }: DropdownRootProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  const ref = useOutsideClick(handleClose);

  const contextValue: DropdownContextProps = {
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

interface DropdownTriggerProps {
  children: ReactNode;
}
const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
  const { handleToggleOpen } = useDropdownContext();

  return (
    <button onClick={handleToggleOpen} className={styles.dropdownTrigger}>
      {children}
    </button>
  );
};

interface DropdownContentProps {
  children: ReactNode;
}

const DropdownContent = ({ children }: DropdownContentProps) => {
  const { open, handleToggleClose } = useDropdownContext();

  return (
    <ul onClick={handleToggleClose} className={styles.dropdownContent}>
      {open && children}
    </ul>
  );
};

interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DropdownItem = ({ label, onClick, ...props }: DropdownItemProps) => {
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
