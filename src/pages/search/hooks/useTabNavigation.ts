import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useTabNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const visitedTabsRef = useRef<Set<string>>(new Set());
  const initializedRef = useRef(false);

  const selectedTab = searchParams.get('tab') || 'class';

  if (selectedTab && !visitedTabsRef.current.has(selectedTab)) {
    visitedTabsRef.current.add(selectedTab);
  }

  useEffect(() => {
    if (!initializedRef.current && !searchParams.has('tab')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('tab', selectedTab);
      setSearchParams(newParams, { replace: true });
      initializedRef.current = true;
    }
  }, [searchParams, selectedTab, setSearchParams]);

  const setSelectedTab = (tab: string) => {
    if (selectedTab !== tab) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('tab', tab);

      const visited = visitedTabsRef.current.has(tab);
      visitedTabsRef.current.add(tab);

      if (visited) {
        setSearchParams(newParams, { replace: true });
      } else {
        setSearchParams(newParams);
      }
    }
  };

  return { selectedTab, setSelectedTab };
};
