import { useState } from 'react';
import DancerList from '@/pages/search/DancerList';
import TagSection from '@/pages/search/TabContainer/TagSection';
import { sortIconStyle } from '@/pages/search/TabContainer/index.css';
import Flex from '@/components/Flex';
import { TabList, TabRoot, TabButton, TabPanel } from '@/components/Tab';
import { IcBtnEtc, IcXMain04 } from '@/assets/svg';
import { DANCER_LIST } from '@/mocks/DancerList';
import { defaultSortTagProps } from '@/types/defaultSortTag';

interface TagItem {
  label: string;
  icon?: JSX.Element;
  type?: string;
}

interface TabContainerProps {
  defaultSortTags: defaultSortTagProps[];
  genre: string;
  level: string;
  startDate: string;
  endDate: string;
}

const TabContainer = ({ defaultSortTags, genre, level, startDate, endDate }: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTags: TagItem[] = [
    { condition: genre, label: genre, type: 'genre' },
    { condition: level, label: level, type: 'level' },
    {
      condition: startDate && endDate,
      label: `${startDate} ~ ${endDate}`,
      type: 'dateRange',
    },
  ]
    .filter((tag) => tag.condition)
    .map((tag) => ({
      label: tag.label as string,
      type: tag.type,
      icon: <IcXMain04 width={18} height={18} />,
    }));

  const displayTags: TagItem[] =
    activeTags.length > 0 ? activeTags : defaultSortTags.map((tag) => ({ label: tag.label, icon: tag.icon }));

  const tagSize: 'search' | 'sort' = activeTags.length > 0 ? 'search' : 'sort';
  const tagType: 'search' | 'sort' = activeTags.length > 0 ? 'search' : 'sort';

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
            <TagSection displayTags={displayTags} activeTags={activeTags} tagSize={tagSize} tagType={tagType} />
          </TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <DancerList dancers={DANCER_LIST} />
          </TabPanel>
        </TabRoot>
        <IcBtnEtc width={68} height={16} className={sortIconStyle} />
      </Flex>
    </Flex>
  );
};

export default TabContainer;
