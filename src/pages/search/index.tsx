import { useState } from 'react';
import SearchBar from '@/pages/search/components/SearchBar';
import TabContainer from '@/pages/search/components/TabContainer';
import { DEFAULT_SORT_TAGS } from '@/pages/search/constants/index';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import { headerRootCutomStyle } from './index.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [genre, setGenre] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    console.log(searchValue);
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
      />
    </Flex>
  );
};

export default Search;
