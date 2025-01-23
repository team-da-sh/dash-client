import { useState } from 'react';
import CalendarCustom from '@/pages/search/components/Calendar';
import {
  bottomSheetStyle,
  genreButtonContainerStyle,
  overlayStyle,
  bottomSheetHidden,
  bottomSheetVisible,
  bottomSheetContainerStyle,
  overlayHidden,
  overlayVisible,
} from '@/pages/search/components/TabContainer/TagSection/BottomSheet/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import LevelButton from '@/components/LevelButton';
import { TabButton, TabList, TabPanel, TabRoot } from '@/components/Tab';
import { GENRE_CATEGORY } from '@/constants/index';
import { LEVEL } from '@/constants';
import GenreButton from './GenreButton';

interface BottomSheetProps {
  onClose: () => void;
  initialTabIndex: number;
  level: string | null;
  genre: string | null;
  setGenre: (genre: string | null) => void;
  setLevel: (level: string | null) => void;
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const BottomSheet = ({
  onClose,
  initialTabIndex,
  genre,
  setGenre,
  setLevel,
  level,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: BottomSheetProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(genre);
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>(level);
  const [selectedStartDate, setSelectedStartDate] = useState<string>(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState<string>(endDate);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      onClose();
    }, 300);
  };

  document.body.style.overflow = 'hidden';

  const handleLevelSelect = (title: string) => {
    setSelectedLevelTitle((prev) => (prev === title ? null : title));
  };

  const handleApplyClick = () => {
    setLevel(selectedLevelTitle);
    setStartDate(selectedStartDate);
    setEndDate(selectedEndDate);
    setGenre(selectedGenre);
    handleClose();
  };

  const handleReset = () => {
    setSelectedLevelTitle(null);
    setSelectedStartDate('');
    setSelectedEndDate('');
    setSelectedGenre(null);
    setLevel(null);
    setStartDate('');
    setEndDate('');
    setGenre(null);
    handleClose();
  };

  const toggleCategory = (category: string) => {
    setSelectedGenre((prev) => (prev === category ? null : category));
  };

  return (
    <div className={bottomSheetContainerStyle}>
      <div className={`${overlayStyle} ${isClosing ? overlayHidden : overlayVisible}`} onClick={handleClose} />
      <Flex direction="column" className={`${bottomSheetStyle} ${isClosing ? bottomSheetHidden : bottomSheetVisible}`}>
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
          <TabPanel isSelected={selectedTab === 0}>
            <div className={genreButtonContainerStyle}>
              {GENRE_CATEGORY.flat().map((category, index) => (
                <GenreButton
                  key={index}
                  category={category}
                  isSelected={selectedGenre === category}
                  onClick={() => toggleCategory(category)}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel isSelected={selectedTab === 1}>
            <Flex direction="column" gap="0.8rem" paddingTop="0.8rem" paddingBottom="4.6rem">
              {LEVEL.map((level) => (
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
              isSearch={true}
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              setStartDate={(date) => setSelectedStartDate(date)}
              setEndDate={(date) => setSelectedEndDate(date)}
            />
          </TabPanel>
        </TabRoot>
        <Flex width="100%" gap="0.8rem">
          <BoxButton variant="secondary" onClick={handleReset}>
            초기화
          </BoxButton>
          <BoxButton
            isDisabled={!selectedLevelTitle && !selectedStartDate && !selectedEndDate && !selectedGenre}
            onClick={handleApplyClick}>
            적용하기
          </BoxButton>
        </Flex>
      </Flex>
    </div>
  );
};

export default BottomSheet;
