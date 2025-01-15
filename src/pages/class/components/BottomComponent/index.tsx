import { useState } from 'react';
import { TabPanelStyle } from '@/pages/class/components/BottomComponent/index.css';
import Intro from '@/pages/class/components/Intro';
import Level from '@/pages/class/components/Level';
import LocationInfo from '@/pages/class/components/LocationInfo';
import Period from '@/pages/class/components/Period';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';

interface BottomComponentProps {
  colorScheme: 'primary' | 'secondary';
}

const BottomComponent = ({ colorScheme }: BottomComponentProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabRoot>
        <Flex paddingTop="1.6rem" paddingLeft="2rem">
          <TabList>
            <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme={colorScheme}>
              <Head level="h5" tag="h5">
                소개
              </Head>
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme={colorScheme}>
              <Head level="h5" tag="h5">
                난이도
              </Head>
            </TabButton>
            <TabButton isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} colorScheme={colorScheme}>
              <Head level="h5" tag="h5">
                기간
              </Head>
            </TabButton>
            <TabButton isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)} colorScheme={colorScheme}>
              <Head level="h5" tag="h5">
                위치
              </Head>
            </TabButton>
          </TabList>
        </Flex>

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
