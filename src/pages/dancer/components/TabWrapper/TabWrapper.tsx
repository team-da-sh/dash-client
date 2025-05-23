import { useState } from 'react';
import * as styles from '@/pages/dancer/components/TabWrapper/tabWrapper.css';
import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import { DANCER_TABS } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface TabWrapperPropTypes {
  colorScheme: 'primary' | 'secondary';
  dancerData: DancerDetailResponseTypes;
}

const TabWrapper = ({ colorScheme, dancerData }: TabWrapperPropTypes) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabRoot>
      <div className={sprinkles({ display: 'flex', pt: 24, justifyContent: 'center' })}>
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

      <div className={styles.tabPanelStyle}>
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
