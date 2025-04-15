import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcBack from '@/shared/assets/svg/IcBack';
import IcClose from '@/shared/assets/svg/IcClose';
import Head from '@/shared/components/Head/Head';
import { backIconStyle, closeIconStyle, headerRootStyle, titleStyle } from '@/shared/components/Header/header.css';

interface HeaderRootProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  isColor?: boolean;
}

interface BackIconProps {
  onFunnelBackClick?: () => void;
  onHomeBackClick?: () => void;
}

interface TitleProps {
  title: string;
}

interface CloseIconProps {
  onClick?: () => void;
}

interface BackIconProps {
  onClick?: () => void;
}

const HeaderRoot = ({ children, isColor = false, className }: HeaderRootProps): JSX.Element => {
  return <div className={clsx(className, headerRootStyle({ isColor }))}>{children}</div>;
};

const BackIcon = ({ onFunnelBackClick, onHomeBackClick }: BackIconProps): JSX.Element => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (onFunnelBackClick) {
      onFunnelBackClick();
      return;
    }

    if (onHomeBackClick) {
      navigate(ROUTES_CONFIG.home.path);
      return;
    }

    navigate(-1);
  };
  return (
    <button className={backIconStyle} type="button" onClick={handleBackClick} aria-label="뒤로가기">
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
    <button className={closeIconStyle} type="button" onClick={onClick} aria-label="닫기">
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
