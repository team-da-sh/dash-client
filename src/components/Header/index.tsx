import clsx from 'clsx';
import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '@/components/Head';
import { headerRootStyle, backIconStyle, titleStyle, closeIconStyle } from '@/components/Header/index.css';
import { IcBack, IcClose } from '@/assets/svg';

interface HeaderRootProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  isColor?: boolean;
}

interface TitleProps {
  title: string;
}

interface CloseIconProps {
  onClick: () => void;
}

const HeaderRoot = ({ children, isColor = false, className }: HeaderRootProps): JSX.Element => {
  return <div className={clsx(className, headerRootStyle({ isColor }))}>{children}</div>;
};

const BackIcon = (): JSX.Element => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <button className={backIconStyle} onClick={handleBackClick} aria-label="뒤로가기">
      <IcBack width={24} height={24} />
    </button>
  );
};

const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <Head level="h1" tag="h6" className={titleStyle}>
      {title}
    </Head>
  );
};

const CloseIcon = ({ onClick }: CloseIconProps): JSX.Element => {
  return (
    <button className={closeIconStyle} onClick={onClick} aria-label="닫기">
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
