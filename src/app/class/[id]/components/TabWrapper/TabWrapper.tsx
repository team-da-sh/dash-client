'use client';

import { useState } from 'react';
import TabIntro from '@/app/class/[id]/components/TabWrapper/TabIntro/TabIntro';
import TabLevel from '@/app/class/[id]/components/TabWrapper/TabLevel/TabLevel';
import TabLocationInfo from '@/app/class/[id]/components/TabWrapper/TabLocation/TabLocation';
import TabPeriod from '@/app/class/[id]/components/TabWrapper/TabPeriod/TabPeriod';
import TabReview from '@/app/class/[id]/components/TabWrapper/TabReview/tabReview';
import { tabPanelStyle, tabListWrapperStyle } from '@/app/class/[id]/components/TabWrapper/tabWrapper.css';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import { TabButton, TabList, TabPanel, TabRoot } from '@/common/components/Tab';
import { notify } from '@/common/components/Toast/Toast';

interface TabWrapperPropTypes {
  colorScheme: 'tertiary';
  lessonData: LessonDetailResponseTypes;
}

const CLASS_TABS = [
  {
    id: 1,
    label: '소개',
    component: (lessonData: LessonDetailResponseTypes) => <TabIntro lessonData={lessonData} />,
    isImplemented: true,
  },
  {
    id: 2,
    label: '난이도',
    component: (lessonData: LessonDetailResponseTypes) => <TabLevel lessonData={lessonData} />,
    isImplemented: true,
  },
  {
    id: 3,
    label: '일정',
    component: (lessonData: LessonDetailResponseTypes) => <TabPeriod lessonData={lessonData} />,
    isImplemented: true,
  },
  {
    id: 4,
    label: '장소',
    component: (lessonData: LessonDetailResponseTypes) => <TabLocationInfo lessonData={lessonData} />,
    isImplemented: true,
  },
  {
    id: 5,
    label: '리뷰',
    component: () => <TabReview />,
    isImplemented: false,
  },
];

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
