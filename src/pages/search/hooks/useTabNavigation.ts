import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useTabNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabHistoryCountRef = useRef(0);

  const selectedTab = parseInt(searchParams.get('tab') || '0', 10);

  const setSelectedTab = (tab: number) => {
    if (selectedTab !== tab) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('tab', tab.toString());

      const replaceMode = tabHistoryCountRef.current >= 1;

      if (replaceMode) {
        setSearchParams(newParams, { replace: true });
      } else {
        setSearchParams(newParams);
        tabHistoryCountRef.current += 1;
      }
    }
  };

  return { selectedTab, setSelectedTab };
};
