'use client';

import { useState } from 'react';
import { tabPanelStyle, tabListWrapperStyle } from '@/app/class/[id]/components/TabWrapper/tabWrapper.css';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import { TabButton, TabList, TabPanel, TabRoot } from '@/common/components/Tab';
import { notify } from '@/common/components/Toast/Toast';
import { CLASS_TABS } from '@/shared/constants';

interface TabWrapperPropTypes {
  colorScheme: 'tertiary';
  lessonData: LessonDetailResponseTypes;
}

const TabWrapper = ({ colorScheme, lessonData }: TabWrapperPropTypes) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabId: number, isImplemented: boolean) => {
    if (!isImplemented) {
      notify({ message: '해당 기능은 추후 구현 예정이에요' });
      return;
    }
    setSelectedTab(tabId - 1);
  };

  return (
    <TabRoot>
      <div className={tabListWrapperStyle}>
        <TabList gap="responsive">
          {CLASS_TABS.map((tab) => (
            <TabButton
              key={tab.id}
              isSelected={selectedTab === tab.id - 1}
              onClick={() => handleTabClick(tab.id, tab.isImplemented)}
              colorScheme={colorScheme}>
              {tab.label}
            </TabButton>
          ))}
        </TabList>
      </div>

      <div className={tabPanelStyle}>
        {CLASS_TABS.map((tab) => (
          <TabPanel key={tab.id} isSelected={selectedTab === tab.id - 1}>
            {tab.isImplemented && tab.component(lessonData)}
          </TabPanel>
        ))}
      </div>
    </TabRoot>
  );
};

export default TabWrapper;
