import { useState } from 'react';
import Flex from '@/components/Flex';
import { TabList, TabRoot, TabButton, TabPanel } from '@/components/Tab';
import { IcBtnEtc } from '@/assets/svg';
import { sortIconStyle } from './index.css';

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Flex direction="column" paddingTop="8.4rem" width="100%" paddingLeft="2rem" paddingRight="2rem">
      <Flex align="center" width="100%" justify="spaceBetween" position="relative">
        <TabRoot>
          <TabList>
            <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme="primary">
              클래스
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme="primary">
              댄서
            </TabButton>
          </TabList>
          <TabPanel isSelected={selectedTab === 0}>
            <p>dd</p>
          </TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <p>d</p>
          </TabPanel>
        </TabRoot>
        <IcBtnEtc width={68} height={16} className={sortIconStyle} />
      </Flex>
    </Flex>
  );
};

export default TabContainer;
