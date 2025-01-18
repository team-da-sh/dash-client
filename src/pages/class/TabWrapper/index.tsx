import { useState } from 'react';
import Intro from '@/pages/class/TabWrapper/TabIntro';
import Level from '@/pages/class/TabWrapper/TabLevel';
import LocationInfo from '@/pages/class/TabWrapper/TabLocation';
import Period from '@/pages/class/TabWrapper/TabPeriod';
import Flex from '@/components/Flex';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import { vars } from '@/styles/theme.css';

interface TabWrapperProps {
  colorScheme: 'primary' | 'secondary';
}

const TabWrapper = ({ colorScheme }: TabWrapperProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: 1, label: '소개', component: <Intro /> },
    { id: 2, label: '난이도', component: <Level /> },
    { id: 3, label: '기간', component: <Period /> },
    { id: 4, label: '위치', component: <LocationInfo /> },
  ];

  return (
    <TabRoot>
      <Flex paddingTop="1.6rem" paddingLeft="2rem">
        <TabList>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              isSelected={selectedTab === tab.id - 1}
              onClick={() => setSelectedTab(tab.id - 1)}
              colorScheme={colorScheme}>
              {tab.label}
            </TabButton>
          ))}
        </TabList>
      </Flex>

      <Flex
        paddingTop="2.4rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        paddingBottom="15rem"
        borderTop={`1px solid ${vars.colors.gray01}`}>
        {tabs.map((tab) => (
          <TabPanel key={tab.id} isSelected={selectedTab === tab.id - 1}>
            {tab.component}
          </TabPanel>
        ))}
      </Flex>
    </TabRoot>
  );
};

export default TabWrapper;
