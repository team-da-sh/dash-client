import { useState } from 'react';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';

export default {
  title: 'Common/Tabs',
  component: TabRoot,
  parameters: {
    layout: 'centered',
  },
};

const createTabStory = (colorScheme: 'primary' | 'secondary') => () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabRoot>
      <TabList>
        <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme={colorScheme}>
          Tab 1
        </TabButton>
        <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme={colorScheme}>
          Tab 2
        </TabButton>
        <TabButton isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} colorScheme={colorScheme}>
          Tab 3 loooong
        </TabButton>
      </TabList>

      <TabPanel isSelected={selectedTab === 0}>Content for Tab 1</TabPanel>
      <TabPanel isSelected={selectedTab === 1}>Content for Tab 2</TabPanel>
      <TabPanel isSelected={selectedTab === 2}>Content for Tab 3</TabPanel>
    </TabRoot>
  );
};

export const Primary = createTabStory('primary');
export const Secondary = createTabStory('secondary');
