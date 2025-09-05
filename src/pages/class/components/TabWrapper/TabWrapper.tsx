import { useState } from 'react';
import * as styles from '@/pages/class/components/TabWrapper/tabWrapper.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import { notify } from '@/shared/components/Toast/Toast';
import { CLASS_TABS } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

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
      <div className={sprinkles({ display: 'flex', pt: 24, justifyContent: 'center' })}>
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

      <div className={styles.tabPanelStyle}>
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
