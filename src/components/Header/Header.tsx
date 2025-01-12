import React from 'react';
import IconBack from '../../../src/assets/svg/ic_back.svg?react';
import IconClose from '../../../src/assets/svg/ic_close.svg?react';
import * as styles from './header.css';

interface HeaderRootProps {
  children: React.ReactNode;
}

interface BackIconProps {
  onClick?: () => void;
}

interface TitleProps {
  text: string;
}

const HeaderRoot = ({ children }: HeaderRootProps): JSX.Element => {
  return <header className={styles.headerRoot}>{children}</header>;
};

const BackIcon = ({ onClick }: BackIconProps): JSX.Element => {
  return <IconBack />;
};

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => {
  return <h1 className={styles.titleStyle}>{text}</h1>;
};

interface CloseIconProps {
  onClick?: () => void;
}

const CloseIcon = ({ onClick }: CloseIconProps): JSX.Element => {
  return <IconClose />;
};

const Header = {
  Root: HeaderRoot,
  BackIcon: BackIcon,
  Title: Title,
  CloseIcon: CloseIcon,
};

export default Header;
