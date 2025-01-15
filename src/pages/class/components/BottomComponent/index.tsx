import { useState } from 'react';
import LocationInfo from '@/pages/class/components/LocationInfo';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import Intro from '../Intro';
import Level from '../Level';
import Period from '../Period';
import { TabListStyle, TabPanelStyle } from './index.css';

interface BottomComponentProps {
  colorScheme: 'primary' | 'secondary';
}

const BottomComponent = ({ colorScheme }: BottomComponentProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabRoot>
        <div className={TabListStyle}>
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
        </div>
        <div className={TabPanelStyle}>
          <TabPanel isSelected={selectedTab === 0}>
            <Intro />
          </TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <Level />
          </TabPanel>
          <TabPanel isSelected={selectedTab === 2}>
            <Period />
          </TabPanel>
          <TabPanel isSelected={selectedTab === 3}>
            <LocationInfo />
          </TabPanel>
        </div>
      </TabRoot>
    </>
  );
};

export default BottomComponent;
