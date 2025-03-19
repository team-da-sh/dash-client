import { forwardRef } from 'react';
import { searchGrayStyle, xCircleGrayStyle } from '@/pages/search/components/SearchBar/searchBar.css';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';

interface SearchBarProps {
  searchValue: string;
  handleSearchChange: (value: string) => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({ searchValue, handleSearchChange }, ref) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  return (
    <Flex align="center" width="29.9rem" height="4.4rem" position="relative" margin="0 0 0 1.2rem">
      <IcSearchGray className={searchGrayStyle} width={24} />
      <Input
        isSearch={true}
        ref={ref}
        value={searchValue}
        placeholder="장르나 댄서 네임을 검색해 보세요"
        onChange={handleInputChange}
      />
      <IcXCircleGray className={xCircleGrayStyle} width={24} onClick={() => handleSearchChange('')} />
    </Flex>
  );
});

export default SearchBar;
