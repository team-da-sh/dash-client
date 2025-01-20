import { useState } from 'react';
import TabContainer from '@/pages/search/components/TabContainer';
import { DEFAULT_SORT_TAGS } from '@/pages/search/constants/index';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import { useGetDancerList } from '@/apis/search/quries';
import SearchBar from './components/SearchBar';
import { headerRootCutomStyle } from './index.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');
  const [genre, setGenre] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const {
    data: dancerList,
    isLoading,
    error,
  } = useGetDancerList({
    keyword: submittedSearchValue,
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
        isLoading={isLoading}
        error={error}
      />
    </Flex>
  );
};

export default Search;
