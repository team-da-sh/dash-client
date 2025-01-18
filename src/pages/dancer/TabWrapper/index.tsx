import { useState } from 'react';
import TabEducation from '@/pages/dancer/TabWrapper/TabEducation';
import TabHistory from '@/pages/dancer/TabWrapper/TabExperience';
import TabVideo from '@/pages/dancer/TabWrapper/TabVideo';
import Flex from '@/components/Flex';
import { TabButton, TabList, TabPanel, TabRoot } from '@/components/Tab';
import { vars } from '@/styles/theme.css';

interface TabWrapperProps {
  colorScheme: 'primary' | 'secondary';
}

const TabWrapper = ({ colorScheme }: TabWrapperProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: 1, label: '학력', component: <TabEducation /> },
    { id: 2, label: '경력', component: <TabHistory /> },
    { id: 3, label: '영상', component: <TabVideo /> },
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
        paddingTop="3.6rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        paddingBottom="4.8rem"
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
