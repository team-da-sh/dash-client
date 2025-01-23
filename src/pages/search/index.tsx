import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '@/pages/search/components/SearchBar';
import TabContainer from '@/pages/search/components/TabContainer';
import { DEFAULT_SORT_TAGS, SORT_LABELS } from '@/pages/search/constants/index';
import { headerRootCutomStyle } from '@/pages/search/index.css';
import { formatDateStartTime, formatDateEndTime } from '@/pages/search/utils';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import { useGetClassList, useGetDancerList } from '@/apis/search/queries';
import { genreEngMapping, levelEngMapping } from '@/constants';
import { labelToSortOptionMap } from '@/constants';

const Search = () => {
  const [searchParams] = useSearchParams();
  const initialGenre = searchParams.get('genre');

  const [genre, setGenre] = useState<string | null>(() => initialGenre || null);

  const [searchValue, setSearchValue] = useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');
  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<keyof typeof labelToSortOptionMap>(SORT_LABELS.LATEST);

  const sortOption = labelToSortOptionMap[selectedLabel];

  const { data: dancerList, error } = useGetDancerList({
    keyword: submittedSearchValue,
  });

  const { data: classList } = useGetClassList({
    keyword: submittedSearchValue,
    genre: genre ? genreEngMapping[genre] : undefined,
    level: level ? levelEngMapping[level] : undefined,
    startDate: formatDateStartTime(startDate),
    endDate: formatDateEndTime(endDate),
    sortOption,
  });

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    setSubmittedSearchValue(searchValue);
  };

  return (
    <Flex>
      <Header.Root className={headerRootCutomStyle} isColor={true}>
        <Header.BackIcon />
        <SearchBar
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
          handleSearchIconClick={handleSearchIconClick}
        />
      </Header.Root>

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
      />
    </Flex>
  );
};

export default Search;
