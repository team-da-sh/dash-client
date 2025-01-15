import { useState } from 'react';
import LocationInfo from '@/pages/class/components/LocationInfo';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import Intro from '../Intro';
import Level from '../Level';
import Period from '../Period';
import Head from '@/components/Head'
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
              <Head level='h5' tag='h5'>소개</Head>
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme={colorScheme}>
              <Head level='h5' tag='h5'>난이도</Head>
            </TabButton>
            <TabButton isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} colorScheme={colorScheme}>
            <Head level='h5' tag='h5'>기간</Head>
            </TabButton>
            <TabButton isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)} colorScheme={colorScheme}>
            <Head level='h5' tag='h5'>위치</Head>
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
