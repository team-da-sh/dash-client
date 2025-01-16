import { useState } from 'react';
import Flex from '@/components/Flex';
import { TabList, TabRoot, TabButton } from '@/components/Tab';
import { IcBtnEtc } from '@/assets/svg';

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Flex direction="column" paddingTop="8.4rem" width="100%" paddingLeft="2rem" paddingRight="2rem">
      <Flex align="center" width="100%" justify="spaceBetween">
        <TabRoot>
          <TabList>
            <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme="primary">
              클래스
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme="primary">
              댄서
            </TabButton>
          </TabList>
        </TabRoot>
        <IcBtnEtc width={68} height={16} />
      </Flex>
    </Flex>
  );
};

export default TabContainer;
