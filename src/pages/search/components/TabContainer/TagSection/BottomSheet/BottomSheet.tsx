import { useState } from 'react';
import CalendarCustom from '@/pages/search/components/Calendar/Calendar';
import {
  bottomSheetContainerStyle,
  bottomSheetHidden,
  bottomSheetStyle,
  bottomSheetVisible,
  genreButtonContainerStyle,
  overlayHidden,
  overlayStyle,
  overlayVisible,
  tabListCustomStyle,
} from '@/pages/search/components/TabContainer/TagSection/BottomSheet/bottomSheet.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import LevelButton from '@/shared/components/LevelButton/LevelButton';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import { LEVEL } from '@/shared/constants';
import { GENRE_CATEGORY } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import GenreButton from './GenreButton/GenreButton';

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
      <div
        className={`${bottomSheetStyle} ${isClosing ? bottomSheetHidden : bottomSheetVisible} ${sprinkles({ display: 'flex', flexDirection: 'column' })}`}>
        <TabRoot>
          <div className={sprinkles({ display: 'flex', paddingBottom: 10, paddingLeft: 20 })}>
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
            <div
              className={sprinkles({
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                paddingBottom: 46,
                paddingTop: 8,
                paddingLeft: 20,
                paddingRight: 20,
              })}>
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
        <div className={sprinkles({ display: 'flex', width: '100%', gap: 8, paddingLeft: 20, paddingRight: 20 })}>
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
