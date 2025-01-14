import React from 'react';
import Head from '@/components/Head';
import * as styles from '@/components/Header/index.css';
import { IcBack, IcClose } from '@/assets/svg';

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
  return <div className={styles.headerRootStyle}>{children}</div>;
};

const BackIcon = ({ onClick }: BackIconProps): JSX.Element => {
  return (
    <button className={styles.backIconStyle} onClick={onClick} aria-label="뒤로가기">
      <IcBack width={24} height={24} />
    </button>
  );
};

const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <Head level="h1" tag="h6" className={styles.titleStyle}>
      {title}
    </Head>
  );
};

const CloseIcon = ({ onClick }: CloseIconProps): JSX.Element => {
  return (
    <button className={styles.closeIconStyle} onClick={onClick} aria-label="닫기">
      <IcClose width={24} height={24} />
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
