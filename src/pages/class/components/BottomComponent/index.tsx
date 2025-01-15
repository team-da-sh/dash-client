import { useState } from 'react';
import LocationInfo from '@/pages/class/components/LocationInfo';
import Flex from '@/components/Flex';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import Level from '../Level';
import Period from '../Period';

interface BottomComponentProps {
  colorScheme: 'primary' | 'secondary';
}

const BottomComponent = ({ colorScheme }: BottomComponentProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Flex width="100%">
        <TabRoot>
          <TabList>
            <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme={colorScheme}>
              소개
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme={colorScheme}>
              난이도
            </TabButton>
            <TabButton isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} colorScheme={colorScheme}>
              기간
            </TabButton>
            <TabButton isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)} colorScheme={colorScheme}>
              위치
            </TabButton>
          </TabList>

          <TabPanel isSelected={selectedTab === 0}>소개부분</TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <Level />
          </TabPanel>
          <TabPanel isSelected={selectedTab === 2}>
            <Period />
          </TabPanel>
          <TabPanel isSelected={selectedTab === 3}>
            <LocationInfo />
          </TabPanel>
        </TabRoot>
      </Flex>
    </>
  );
};

export default BottomComponent;
