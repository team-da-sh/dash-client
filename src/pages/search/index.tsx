import { useState } from 'react';
import SearchBar from '@/pages/search/components/SearchBar';
import Header from '@/components/Header';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    console.log(searchValue);
  };

  return (
    <Header.Root>
      <Header.BackIcon />
      <SearchBar
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        handleSearchIconClick={handleSearchIconClick}
      />
    </Header.Root>
  );
};

export default Search;
