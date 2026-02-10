'use client';

import { useState } from 'react';
import TabEducation from '@/app/dancer/[id]/components/TabWrapper/TabEducation/TabEducation';
import TabHistory from '@/app/dancer/[id]/components/TabWrapper/TabExperience/TabExperience';
import TabPrize from '@/app/dancer/[id]/components/TabWrapper/TabPrize/TabPrize';
import TabVideo from '@/app/dancer/[id]/components/TabWrapper/TabVideo/TabVideo';
import { tabPanelStyle, tabListWrapperStyle } from '@/app/dancer/[id]/components/TabWrapper/tabWrapper.css';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import { TabButton, TabList, TabPanel, TabRoot } from '@/common/components/Tab';

interface TabWrapperPropTypes {
  colorScheme: 'primary' | 'secondary';
  dancerData: DancerDetailResponseTypes;
}

const DANCER_TABS = [
  {
    id: 1,
    label: '학력',
    component: (dancerData: DancerDetailResponseTypes) => <TabEducation dancerData={dancerData} />,
  },
  {
    id: 2,
    label: '경력',
    component: (dancerData: DancerDetailResponseTypes) => <TabHistory dancerData={dancerData} />,
  },
  {
    id: 3,
    label: '수상',
    component: (dancerData: DancerDetailResponseTypes) => <TabPrize dancerData={dancerData} />,
  },
  { id: 4, label: '영상', component: (dancerData: DancerDetailResponseTypes) => <TabVideo dancerData={dancerData} /> },
];

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
