import React from 'react';
import Head from '@/components/Head';
import { IcClose } from '../../assets/svg';
import { IcBack } from '../../assets/svg';
import * as styles from './index.css';

interface HeaderRootProps {
  children: React.ReactNode;
}

interface BackIconProps {
  onClick: () => void;
}

interface TitleProps {
  title: string;
}

interface CloseIconProps {
  onClick: () => void;
}

const HeaderRoot = ({ children }: HeaderRootProps): JSX.Element => {
  return (
    <Head level="h1" tag="h2" className={styles.headerRootStyle}>
      {children}
    </Head>
  );
};

const BackIcon = ({ onClick }: BackIconProps): JSX.Element => {
  return (
    <button className={styles.backIconStyle} onClick={onClick} aria-label="뒤로가기">
      <IcBack />
    </button>
  );
};

const Title = ({ title }: TitleProps): JSX.Element => {
  return <h1 className={styles.titleStyle}>{title}</h1>;
};

const CloseIcon = ({ onClick }: CloseIconProps): JSX.Element => {
  return (
    <button className={styles.closeIconStyle} onClick={onClick} aria-label="닫기">
      <IcClose />
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
