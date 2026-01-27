import { useState } from 'react';
import CalendarCustom from '@/pages/search/components/Calendar/Calendar';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/GenreButton';
import {
  bottomSheetContainerStyle,
  overlayStyle,
  overlayVisible,
  overlayHidden,
  bottomSheetStyle,
  bottomSheetVisible,
  bottomSheetHidden,
  genreButtonContainerStyle,
  tabListCustomStyle,
  bottomSheetContentStyle,
  tabListWrapperStyle,
  levelButtonWrapperStyle,
  buttonWrapperStyle,
} from '@/pages/search/components/TabContainer/TagSection/BottomSheet/bottomSheet.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import { TabButton, TabList, TabPanel, TabRoot } from '@/common/components/Tab';
import { LEVEL } from '@/shared/constants';
import { GENRE_CATEGORY } from '@/shared/constants/index';

interface BottomSheetPropTypes {
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
}: BottomSheetPropTypes) => {
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
      <div
        className={`${overlayStyle} ${isClosing ? overlayHidden : overlayVisible}`}
        onClick={handleClose}
      />
      <div
        className={`${bottomSheetStyle} ${isClosing ? bottomSheetHidden : bottomSheetVisible} ${bottomSheetContentStyle}`}>
        <TabRoot>
          <div className={tabListWrapperStyle}>
            <TabList className={tabListCustomStyle}>
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
          </div>
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
            <div className={levelButtonWrapperStyle}>
              {LEVEL.map((level) => (
                <LevelButton
                  key={level.title}
                  level={level}
                  isSelected={selectedLevelTitle === level.title}
                  onClick={() => handleLevelSelect(level.title)}
                />
              ))}
            </div>
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
        <div className={buttonWrapperStyle}>
          <BoxButton variant="secondary" onClick={handleReset}>
            초기화
          </BoxButton>
          <BoxButton
            isDisabled={!selectedLevelTitle && !selectedStartDate && !selectedEndDate && !selectedGenre}
            onClick={handleApplyClick}>
            적용하기
          </BoxButton>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
