'use client';

import { useState } from 'react';
import { tabPanelStyle, tabListWrapperStyle } from '@/app/dancer/[id]/components/TabWrapper/tabWrapper.css';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import { TabButton, TabList, TabPanel, TabRoot } from '@/common/components/Tab';
import { DANCER_TABS } from '@/shared/constants';

interface TabWrapperPropTypes {
  colorScheme: 'primary' | 'secondary';
  dancerData: DancerDetailResponseTypes;
}

const TabWrapper = ({ colorScheme, dancerData }: TabWrapperPropTypes) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabRoot>
      <div className={tabListWrapperStyle}>
        <TabList gap="responsive">
          {DANCER_TABS.map((tab) => (
            <TabButton
              key={tab.id}
              isSelected={selectedTab === tab.id - 1}
              onClick={() => setSelectedTab(tab.id - 1)}
              colorScheme={colorScheme}>
              {tab.label}
            </TabButton>
          ))}
        </TabList>
      </div>

      <div className={tabPanelStyle}>
        {DANCER_TABS.map((tab) => (
          <TabPanel key={tab.id} isSelected={selectedTab === tab.id - 1}>
            {selectedTab === tab.id - 1 && tab.component(dancerData)}
          </TabPanel>
        ))}
      </div>
    </TabRoot>
  );
};

export default TabWrapper;
