import React from 'react';
import IconBack from '../../../src/assets/svg/ic_back.svg?react';
import IconClose from '../../../src/assets/svg/ic_close.svg?react';
import * as styles from './index.css';

interface HeaderRootProps {
  children: React.ReactNode;
}

interface BackIconProps {
  onClick?: () => void;
}

interface TitleProps {
  title: string;
}

interface CloseIconProps {
  onClick?: () => void;
}

const HeaderRoot = ({ children }: HeaderRootProps): JSX.Element => {
  return <header className={styles.headerRoot}>{children}</header>;
};

const BackIcon = ({ onClick }: BackIconProps): JSX.Element => {
  return (
    <button className={styles.backIconStyle} onClick={onClick} aria-label="뒤로가기">
      <IconBack />
    </button>
  );
};

const Title = ({ title }: TitleProps): JSX.Element => {
  return <h1 className={styles.titleStyle}>{title}</h1>;
};

const CloseIcon = ({ onClick }: CloseIconProps): JSX.Element => {
  return (
    <button className={styles.closeIconStyle} onClick={onClick} aria-label="닫기">
      <IconClose />
    </button>
  );
};

const Header = {
  Root: HeaderRoot,
  BackIcon: BackIcon,
  Title: Title,
  CloseIcon: CloseIcon,
};

export default Header;
