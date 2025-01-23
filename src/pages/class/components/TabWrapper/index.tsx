import { useState } from 'react';
import { LessonDetailApiResponse } from '@/pages/class/types/index';
import Flex from '@/components/Flex';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import { vars } from '@/styles/theme.css';
import { CLASS_TABS } from '@/constants';

interface TabWrapperProps {
  colorScheme: 'primary' | 'secondary';
  lessonData: LessonDetailApiResponse;
}

const TabWrapper = ({ colorScheme, lessonData }: TabWrapperProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabRoot>
      <Flex paddingTop="1.6rem" paddingLeft="2rem">
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
      </Flex>

      <Flex
        paddingTop="2.4rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        paddingBottom="15rem"
        borderTop={`1px solid ${vars.colors.gray01}`}>
        {CLASS_TABS.map((tab) => (
          <TabPanel key={tab.id} isSelected={selectedTab === tab.id - 1}>
            {tab.component(lessonData)}
          </TabPanel>
        ))}
      </Flex>
    </TabRoot>
  );
};

export default TabWrapper;
