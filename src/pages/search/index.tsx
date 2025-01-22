import { useState } from 'react';
import SearchBar from '@/pages/search/components/SearchBar';
import TabContainer from '@/pages/search/components/TabContainer';
import { DEFAULT_SORT_TAGS, SORT_LABELS } from '@/pages/search/constants/index';
import { formatDateStartTime, formatDateEndTime } from '@/pages/search/utils';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import { useGetClassList, useGetDancerList } from '@/apis/search/queries';
import { genreEngMapping, levelEngMapping } from '@/constants';
import { labelToSortOptionMap } from '@/constants';
import SearchIntro from './components/SearchIntro';
import { headerRootCutomStyle } from './index.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');
  const [genre, setGenre] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<keyof typeof labelToSortOptionMap>(SORT_LABELS.LATEST);
  const [hasSearched, setHasSearched] = useState(false);

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

  console.log(genre);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    setSubmittedSearchValue(searchValue);
    setHasSearched(true);
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
      {!hasSearched ? (
        <Flex paddingTop="7.9rem" paddingLeft="2rem">
          <SearchIntro />
        </Flex>
      ) : (
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
      )}
    </Flex>
  );
};

export default Search;
