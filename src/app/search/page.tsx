'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { useGetClassList, useGetDancerList } from '@/app/search/apis/queries';
import SearchBar from '@/app/search/components/SearchBar/SearchBar';
import SearchHeader from '@/app/search/components/SearchHeader/SearchHeader';
import TabContainer from '@/app/search/components/TabContainer/TabContainer';
import type { TAB_TYPES } from '@/app/search/constants/index';
import { DEFAULT_SORT_TAGS, SORT_LABELS, TAB } from '@/app/search/constants/index';
import { searchPageWrapperStyle } from '@/app/search/index.css';
import { formatDateEndTime, formatDateStartTime } from '@/app/search/utils/formatDate';
import { handleSearchChange } from '@/app/search/utils/searchHandlers';
import useDebounce from '@/common/hooks/useDebounce';
import { genreEngMapping, labelToSortOptionMap, levelEngMapping } from '@/shared/constants';
import { useTabNavigation } from '@/shared/hooks/useTabNavigation';

const Search = () => {
  const searchParams = useSearchParams();
  const { selectedTab, setSelectedTab } = useTabNavigation<TAB_TYPES>(TAB.CLASS);

  const [genre, setGenre] = useState<string | null>(searchParams?.get('genre') ?? null);

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
    <div className={searchPageWrapperStyle}>
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
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Search />
    </Suspense>
  );
}
