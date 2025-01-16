import { useState } from 'react';
import Intro from '@/pages/class/BottomWrapper/TabIntro';
import Level from '@/pages/class/BottomWrapper/TabLevel';
import LocationInfo from '@/pages/class/BottomWrapper/TabLocation';
import Period from '@/pages/class/BottomWrapper/TabPeriod';
import { tabPanelStyle } from '@/pages/class/BottomWrapper/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import { vars } from '@/styles/theme.css';

interface BottomComponentProps {
  colorScheme: 'primary' | 'secondary';
}

const BottomWrapper = ({ colorScheme }: BottomComponentProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
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

      <Flex padding="2.4rem 2rem 2.4rem 2rem" borderTop="1px solid" borderColor={vars.colors.gray01}>
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
      </Flex>
    </TabRoot>
  );
};

export default BottomWrapper;
