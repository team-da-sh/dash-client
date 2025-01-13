import { useState } from 'react';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';

export default {
  title: 'Common/Tabs',
  component: TabRoot,
  parameters: {
    layout: 'centered',
  },
};

const createTabStory = (colorScheme: 'main' | 'dark') => () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 3, label: 'Tab 3 looooong', content: 'Content for Tab 3' },
  ];

  return (
    <TabRoot>
      <TabList>
        {tabs.map((tab, id) => (
          <TabButton
            key={id}
            isSelected={selectedTab === id}
            onClick={() => setSelectedTab(id)}
            colorScheme={colorScheme}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
      {tabs.map((tab, id) => (
        <TabPanel key={id} isSelected={selectedTab === id}>
          {tab.content}
        </TabPanel>
      ))}
    </TabRoot>
  );
};

export const MainTabs = createTabStory('main');
export const DarkTabs = createTabStory('dark');
