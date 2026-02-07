import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export const useTabNavigation = <T extends string>(defaultTab: T) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const visitedTabsRef = useRef<Set<string>>(new Set());

  const selectedTab = searchParams?.get('tab') || defaultTab;

  const setSelectedTab = (tab: string) => {
    if (selectedTab === tab) return;

    const newParams = new URLSearchParams(searchParams?.toString() ?? '');
    newParams.set('tab', tab);

    router.replace(`${pathname}?${newParams.toString()}`);
    visitedTabsRef.current.add(tab);
  };

  return { selectedTab, setSelectedTab };
};
