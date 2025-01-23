import { useState } from 'react';
import ClassItem from '@/pages/home/components/LessonItem';
import { defaultSortTagProps } from '@/pages/home/types/defaultSortTag';
import DancerList from '@/pages/search/components/TabContainer/DancerList';
import EmptyView from '@/pages/search/components/TabContainer/EmptyView';
import TagSection from '@/pages/search/components/TabContainer/TagSection';
import Dropdown from '@/pages/search/components/TabContainer/TagSection/Dropdown';
import { divCustomStyle } from '@/pages/search/components/TabContainer/index.css';
import Flex from '@/components/Flex';
import { TabList, TabRoot, TabButton, TabPanel } from '@/components/Tab';
import Text from '@/components/Text';
import { DancerListResponse, ClassListResponse } from '@/apis/search/queries';
import { IcArrowUnderGray } from '@/assets/svg';
import { IcXMain04 } from '@/assets/svg';

interface TagItem {
  label: string;
  icon?: JSX.Element;
  type?: string;
}

interface ClassTypes {
  id: number;
  teacherProfileImage: string;
  imageUrl: string;
  level: string;
  genre: string;
  name: string;
  teacherName: string;
  startDate: string;
  endDate: string;
  location: string;
  remainingDays: number;
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
  classList: ClassListResponse | undefined;
  dancerList: DancerListResponse | undefined;
  error: Error | null;
  selectedLabel: '최신 등록순' | '찜이 많은순' | '마감 임박순';
  setSelectedLabel: (label: '최신 등록순' | '찜이 많은순' | '마감 임박순') => void;
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
  dancerList,
  error,
  classList,
  selectedLabel,
  setSelectedLabel,
}: TabContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTagReset = (type: string) => {
    switch (type) {
      case 'genre':
        setGenre(null);
        break;
      case 'level':
        setLevel(null);
        break;
      case 'dateRange':
        setStartDate('');
        setEndDate('');
        break;
      default:
        break;
    }
  };

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
      icon: (
        <IcXMain04
          width={18}
          height={18}
          onClick={(e) => {
            e.stopPropagation();
            handleTagReset(tag.type!);
          }}
        />
      ),
    }));

  const displayTags: TagItem[] =
    activeTags.length > 0 ? activeTags : defaultSortTags.map((tag) => ({ label: tag.label, icon: tag.icon }));

  const tagSize: 'search' | 'sort' = activeTags.length > 0 ? 'search' : 'sort';
  const tagType: 'search' | 'sort' = activeTags.length > 0 ? 'search' : 'sort';

  return (
    <Flex direction="column" paddingTop="8.4rem" width="100%" paddingLeft="2rem" paddingRight="2rem">
      <Flex align="center" width="100%" justify="spaceBetween" position="relative">
        <TabRoot>
          <Flex justify="spaceBetween">
            <TabList>
              <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme="primary">
                클래스
              </TabButton>
              <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme="primary">
                댄서
              </TabButton>
            </TabList>
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
          </Flex>

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
              {classList && classList.lessons && classList.lessons.length > 0 ? (
                classList.lessons.map((data: ClassTypes) => (
                  <ClassItem
                    key={data.id}
                    id={data.id}
                    imageUrl={data.imageUrl}
                    level={data.level}
                    genre={data.genre}
                    name={data.name}
                    teacherName={data.teacherName}
                    teacherProfileImage={data.teacherProfileImage}
                    startDate={data.startDate}
                    endDate={data.endDate}
                    remainingDays={data.remainingDays}
                    useNewStyles={true}
                  />
                ))
              ) : (
                <EmptyView />
              )}
            </div>
          </TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            {error && <div>Error: {error.message}</div>}
            {dancerList && dancerList.teachers && dancerList.teachers.length > 0 ? (
              <DancerList dancers={dancerList.teachers} />
            ) : (
              <EmptyView />
            )}
          </TabPanel>
        </TabRoot>
      </Flex>
    </Flex>
  );
};

export default TabContainer;
