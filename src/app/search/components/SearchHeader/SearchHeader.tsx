'use client';

import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import { backIconStyle, headerRootStyle } from '@/app/search/components/SearchHeader/searchHeader.css';
import IcBack from '@/shared/assets/svg/IcBack';

interface HeaderRootProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const HeaderRoot = ({ children }: HeaderRootProps): JSX.Element => {
  return <header className={headerRootStyle({ isColor: true })}>{children}</header>;
};

const BackIcon = (): JSX.Element => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
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
