import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useTabNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const visitedTabsRef = useRef<Set<string>>(new Set());

  const selectedTab = searchParams.get('tab') || 'class';

  const setSelectedTab = (tab: string) => {
    if (selectedTab !== tab) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('tab', tab);

      setSearchParams(newParams);

      visitedTabsRef.current.add(tab);
    }
  };

  return { selectedTab, setSelectedTab };
};
