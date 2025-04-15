import { useState } from 'react';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import * as styles from '@/pages/class/components/TabWrapper/tabWrapper.css'
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import { CLASS_TABS } from '@/shared/constants';
import { sprinkles } from "@/shared/styles/sprinkles.css";

interface TabWrapperPropTypes {
  colorScheme: 'primary' | 'secondary';
  lessonData: LessonDetailResponseTypes;
}

const TabWrapper = ({ colorScheme, lessonData }: TabWrapperPropTypes) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabRoot>
      <div className={sprinkles({pt:16, pl: 20})}>
        <TabList>
          {CLASS_TABS.map((tab) => (
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

        <div className={styles.tabPanelStyle}>
        {CLASS_TABS.map((tab) => (
          <TabPanel key={tab.id} isSelected={selectedTab === tab.id - 1}>
            {tab.component(lessonData)}
          </TabPanel>
        ))}
        </div>
    </TabRoot>
  );
};

export default TabWrapper;
