import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetClassList, useGetDancerList } from '@/pages/search/apis/queries';
import SearchBar from '@/pages/search/components/SearchBar/SearchBar';
import TabContainer from '@/pages/search/components/TabContainer/TabContainer';
import type { TAB_TYPES } from '@/pages/search/constants/index';
import { DEFAULT_SORT_TAGS, SORT_LABELS, TAB } from '@/pages/search/constants/index';
import { formatDateEndTime, formatDateStartTime } from '@/pages/search/utils/formatDate';
import { handleSearchChange } from '@/pages/search/utils/searchHandlers';
import Flex from '@/shared/components/Flex/Flex';
import { genreEngMapping, labelToSortOptionMap, levelEngMapping } from '@/shared/constants';
import useDebounce from '@/shared/hooks/useDebounce';
import { useTabNavigation } from '@/shared/hooks/useTabNavigation';
import SearchHeader from './components/SearchHeader/SearchHeader';

const Search = () => {
  const location = useLocation();
  const { selectedTab, setSelectedTab } = useTabNavigation<TAB_TYPES>(TAB.CLASS);

  const [genre, setGenre] = useState<string | null>(location.state?.genre || null);

  const [searchValue, setSearchValue] = useState('');

  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<keyof typeof labelToSortOptionMap>(SORT_LABELS.LATEST);

  const debouncedSearchValue = useDebounce({ value: searchValue, delay: 300 });

  const sortOption = labelToSortOptionMap[selectedLabel];

  const { data: dancerList, error } = useGetDancerList({
    keyword: debouncedSearchValue,
    selectedTab: selectedTab as TAB_TYPES,
  });

  const { data: classList } = useGetClassList({
    keyword: debouncedSearchValue,
    genre: genre ? genreEngMapping[genre] : undefined,
    level: level ? levelEngMapping[level] : undefined,
    startDate: formatDateStartTime(startDate),
    endDate: formatDateEndTime(endDate),
    sortOption,
    selectedTab: selectedTab as TAB_TYPES,
  });

  return (
    <Flex>
      <SearchHeader.Root>
        <SearchHeader.BackIcon />
        <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange(setSearchValue)} />
      </SearchHeader.Root>

      <TabContainer
        defaultSortTags={DEFAULT_SORT_TAGS}
        genre={genre}
        level={level}
        startDate={startDate}
        endDate={endDate}
        setGenre={setGenre}
        setLevel={setLevel}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        dancerList={dancerList}
        classList={classList}
        error={error}
        selectedLabel={selectedLabel}
        setSelectedLabel={setSelectedLabel}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </Flex>
  );
};

export default Search;
