import { useState } from 'react';
import { DancerDetailResponse } from '@/pages/dancer/types/api';
import Flex from '@/shared/components/Flex/Flex';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import { DANCER_TABS } from '@/shared/constants';
import { vars } from '@/shared/styles/theme.css';

interface TabWrapperProps {
  colorScheme: 'primary' | 'secondary';
  dancerData: DancerDetailResponse;
}

const TabWrapper = ({ colorScheme, dancerData }: TabWrapperProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabRoot>
      <Flex paddingTop="1.6rem" paddingLeft="2rem">
        <TabList>
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
      </Flex>

      <Flex
        paddingTop="3.6rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        paddingBottom="4.8rem"
        borderTop={`1px solid ${vars.colors.gray01}`}>
        {DANCER_TABS.map((tab) => (
          <TabPanel key={tab.id} isSelected={selectedTab === tab.id - 1}>
            {selectedTab === tab.id - 1 && tab.component(dancerData)}
          </TabPanel>
        ))}
      </Flex>
    </TabRoot>
  );
};

export default TabWrapper;
