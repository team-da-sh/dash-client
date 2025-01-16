import { useState } from 'react';
import Intro from '@/pages/class/BottomWrapper/TabIntro';
import Level from '@/pages/class/BottomWrapper/TabLevel';
import LocationInfo from '@/pages/class/BottomWrapper/TabLocation';
import Period from '@/pages/class/BottomWrapper/TabPeriod';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { TabRoot, TabList, TabButton, TabPanel } from '@/components/Tab';
import { vars } from '@/styles/theme.css';

interface BottomComponentProps {
  colorScheme: 'primary' | 'secondary';
}

const BottomWrapper = ({ colorScheme }: BottomComponentProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { label: '소개', component: <Intro /> },
    { label: '난이도', component: <Level /> },
    { label: '기간', component: <Period /> },
    { label: '위치', component: <LocationInfo /> },
  ];

  return (
    <TabRoot>
      <Flex paddingTop="1.6rem" paddingLeft="2rem">
        <TabList>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              isSelected={selectedTab === index}
              onClick={() => setSelectedTab(index)}
              colorScheme={colorScheme}
            >
              <Head level="h5" tag="h5">
                {tab.label}
              </Head>
            </TabButton>
          ))}
        </TabList>
      </Flex>

      <Flex
        paddingTop="2.4rem"
        paddingRight="2rem"
        paddingLeft="2rem"
        borderTop={`1px solid ${vars.colors.gray01}`}
      >
        {tabs.map((tab, index) => (
          <TabPanel key={index} isSelected={selectedTab === index}>
            {tab.component}
          </TabPanel>
        ))}
      </Flex>
    </TabRoot>
  );
};

export default BottomWrapper;
