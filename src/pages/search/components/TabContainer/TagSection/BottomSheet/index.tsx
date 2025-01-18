import { useState } from 'react';
import CalendarCustom from '@/pages/search/components/Calendar';
import {
  bottomSheetStyle,
  overlayStyle,
} from '@/pages/search/components/TabContainer/TagSection/BottomSheet/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import LevelButton from '@/components/LevelButton';
import { TabButton, TabList, TabPanel, TabRoot } from '@/components/Tab';
import { levels } from '@/constants';

interface BottomSheetProps {
  onClose: () => void;
  initialTabIndex: number;
  setLevel: (level: string | null) => void;
  appliedLevel: string | null;
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const BottomSheet = ({
  onClose,
  initialTabIndex,
  setLevel,
  appliedLevel,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: BottomSheetProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex);
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>(appliedLevel);
  const [selectedStartDate, setSelectedStartDate] = useState<string>(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState<string>(endDate);

  document.body.style.overflow = 'hidden';

  const handleLevelSelect = (title: string) => {
    setSelectedLevelTitle((prev) => (prev === title ? null : title));
  };

  const handleApplyClick = () => {
    setLevel(selectedLevelTitle);
    setStartDate(selectedStartDate);
    setEndDate(selectedEndDate);
    handleClose();
  };

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  return (
    <div className={bottomSheetStyle}>
      <div className={overlayStyle} onClick={handleClose} />
      <Flex direction="column" className={bottomSheetStyle}>
        <TabRoot>
          <TabList>
            <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme="secondary">
              장르
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme="secondary">
              난이도
            </TabButton>
            <TabButton isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} colorScheme="secondary">
              기간
            </TabButton>
          </TabList>
          <TabPanel isSelected={selectedTab === 0}>장르</TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <Flex direction="column" gap="0.8rem" paddingTop="0.8rem" paddingBottom="4.6rem">
              {levels.map((level) => (
                <LevelButton
                  key={level.title}
                  level={level}
                  isSelected={selectedLevelTitle === level.title}
                  onClick={() => handleLevelSelect(level.title)}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel isSelected={selectedTab === 2}>
            <CalendarCustom
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              setStartDate={(date) => setSelectedStartDate(date)}
              setEndDate={(date) => setSelectedEndDate(date)}
            />
          </TabPanel>
        </TabRoot>
        <Flex width="100%" gap="0.8rem">
          <BoxButton
            variant="secondary"
            onClick={() => {
              setSelectedLevelTitle(null);
              setSelectedStartDate('');
              setSelectedEndDate('');
            }}>
            초기화
          </BoxButton>
          <BoxButton
            isDisabled={!selectedLevelTitle && !selectedStartDate && !selectedEndDate}
            onClick={handleApplyClick}>
            적용하기
          </BoxButton>
        </Flex>
      </Flex>
    </div>
  );
};

export default BottomSheet;
