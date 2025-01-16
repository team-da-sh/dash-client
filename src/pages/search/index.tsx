import { useState } from 'react';
import SearchBar from '@/pages/search/SearchBar';
import TabContainer from '@/pages/search/TabContainer';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import { headerRootCutomStyle } from './index.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    console.log(searchValue);
  };

  return (
    <Flex>
      <Header.Root className={headerRootCutomStyle}>
        <Header.BackIcon />
        <SearchBar
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
          handleSearchIconClick={handleSearchIconClick}
        />
      </Header.Root>
      <TabContainer />
    </Flex>
  );
};

export default Search;
