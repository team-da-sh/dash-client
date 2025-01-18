import { useState } from 'react';
import ClassItem from '@/pages/home/components/ClassItem';
import DancerList from '@/pages/search/components/DancerList';
import TagSection from '@/pages/search/components/TabContainer/TagSection';
import { divCustomStyle, dropdownDivStyle } from '@/pages/search/components/TabContainer/index.css';
import { CLASS_LIST, DANCER_LIST } from '@/pages/search/mocks/index';
import { defaultSortTagProps } from '@/pages/search/types/defaultSortTag';
import Flex from '@/components/Flex';
import { TabList, TabRoot, TabButton, TabPanel } from '@/components/Tab';
import Text from '@/components/Text';
import { IcArrowUnderGray, IcXMain04 } from '@/assets/svg';
import Dropdown from './TagSection/Dropdown';

interface TagItem {
  label: string;
  icon?: JSX.Element;
  type?: string;
}

interface TabContainerProps {
  defaultSortTags: defaultSortTagProps[];
  genre: string | null;
  level: string | null;
  startDate: string;
  endDate: string;
  setGenre: (genre: string | null) => void;
  setLevel: (level: string | null) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const TabContainer = ({
  defaultSortTags,
  genre,
  level,
  startDate,
  endDate,
  setGenre,
  setLevel,
  setStartDate,
  setEndDate,
}: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState('최신 등록순');

  const activeTags: TagItem[] = [
    { condition: genre, label: genre, type: 'genre' },
    { condition: level, label: level || '', type: 'level' },
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
            <div className={dropdownDivStyle}>
              <Dropdown.Root>
                <Dropdown.Trigger>
                  <Flex align="center">
                    <Text tag="b7" color="gray7">
                      {selectedLabel}
                    </Text>
                    <IcArrowUnderGray width={14} />
                  </Flex>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item label="최신 등록순" onClick={() => setSelectedLabel('최신 등록순')} />
                  <Dropdown.Item label="찜이 많은순" onClick={() => setSelectedLabel('찜이 많은순')} />
                  <Dropdown.Item label="마감 임박순" onClick={() => setSelectedLabel('마감 임박순')} />
                </Dropdown.Content>
              </Dropdown.Root>
            </div>
          </TabList>
          <TabPanel isSelected={selectedTab === 0}>
            <TagSection
              displayTags={displayTags}
              activeTags={activeTags}
              tagSize={tagSize}
              tagType={tagType}
              genre={genre}
              setGenre={setGenre}
              setLevel={setLevel}
              level={level}
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <div className={divCustomStyle}>
              {CLASS_LIST.map((data) => (
                <ClassItem
                  key={data.id}
                  lessonId={data.id}
                  lessonImageUrl={data.teacherProfileImage}
                  lessonLevel={data.level}
                  lessonGenre={data.genre}
                  lessonName={data.name}
                  teacherNickname={data.teacherName}
                  teacherImageUrl={data.teacherProfileImage}
                  lessonStartDateTime={data.startDate}
                  lessonEndDateTime={data.endDate}
                  lessonStreetAddress={data.location}
                  lessonRemainingDays={data.remainingDays}
                  useNewStyles={true}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <DancerList dancers={DANCER_LIST} />
          </TabPanel>
        </TabRoot>
      </Flex>
    </Flex>
  );
};

export default TabContainer;
