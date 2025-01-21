import { forwardRef } from 'react';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import { IcSearchGray, IcXCircleGray } from '@/assets/svg';
import { searchGrayStyle, xCircleGrayStyle } from './index.css';

interface SearchBarProps {
  searchValue: string;
  handleSearchChange: (value: string) => void;
  handleSearchIconClick: () => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ searchValue, handleSearchChange, handleSearchIconClick }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchChange(event.target.value);
    };

    return (
      <Flex align="center" width="29.9rem" height="4.4rem" position="relative" margin="0 0 0 1.2rem">
        <IcSearchGray className={searchGrayStyle} width={24} onClick={handleSearchIconClick} />
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
  }
);

export default SearchBar;
