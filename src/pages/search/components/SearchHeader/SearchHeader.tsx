import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { backIconStyle, headerRootStyle } from '@/pages/search/components/SearchHeader/searchHeader.css';
import IcBack from '@/shared/assets/svg/IcBack';

interface HeaderRootProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const HeaderRoot = ({ children }: HeaderRootProps): JSX.Element => {
  return <header className={headerRootStyle({ isColor: true })}>{children}</header>;
};

const BackIcon = (): JSX.Element => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <button className={backIconStyle} type="button" onClick={handleBackClick} aria-label="뒤로가기">
      <IcBack width={24} height={24} />
    </button>
  );
};

const SearchHeader = {
  Root: HeaderRoot,
  BackIcon: BackIcon,
};

export default SearchHeader;
