import { useState } from 'react';
import BottomSheet from '@/pages/search/components/TabContainer/TagSection/BottomSheet/BottomSheet';
import * as styles from '@/pages/search/components/TabContainer/TagSection/tagSection.css';
import IcFilterGray from '@/shared/assets/svg/IcFilterGray';
import Tag from '@/shared/components/Tag/Tag';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface TagItemTypes {
  label: string;
  icon?: JSX.Element;
  type?: string;
}

interface TagSectionPropTypes {
  displayTags: TagItemTypes[];
  activeTags: TagItemTypes[];
  tagSize: 'search' | 'sort';
  tagType: 'search' | 'sort';
  genre: string | null;
  level: string | null;
  startDate: string;
  endDate: string;
  setGenre: (genre: string | null) => void;
  setLevel: (level: string | null) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const TagSection = ({
  displayTags,
  activeTags,
  tagSize,
  tagType,
  genre,
  setGenre,
  setLevel,
  level,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: TagSectionPropTypes) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  const handleTagClick = (index: number) => {
    if (activeTags.length > 0) {
      const clickedTag = activeTags[index];
      const tabMapping: Record<string, number> = {
        genre: 0,
        level: 1,
        dateRange: 2,
      };
      if (clickedTag.type) {
        setSelectedTagIndex(tabMapping[clickedTag.type]);
      }
    } else {
      setSelectedTagIndex(index);
    }
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 12,
          paddingBottom: 16,
          width: '100%',
        })}>
        <div className={sprinkles({ display: 'flex', gap: 6 })}>
          {displayTags.map((tag, index) => (
            <Tag
              className={styles.tagCustomStyle}
              key={index}
              size={tagSize}
              type={tagType}
              onClick={() => handleTagClick(index)}>
              {tag.label}
              {tag.icon && tag.icon}
            </Tag>
          ))}
        </div>
        {!activeTags.length && <IcFilterGray width={28} onClick={() => handleTagClick(0)} />}
      </div>
      {isBottomSheetOpen && (
        <BottomSheet
          onClose={handleBottomSheetClose}
          initialTabIndex={selectedTagIndex}
          genre={genre}
          setGenre={setGenre}
          setLevel={setLevel}
          level={level}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}
    </>
  );
};

export default TagSection;
