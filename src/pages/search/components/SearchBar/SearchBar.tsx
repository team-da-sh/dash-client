import { forwardRef } from 'react';
import { containerStyle, inputStyle } from '@/pages/search/components/SearchBar/searchBar.css';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';

interface SearchBarProps {
  searchValue: string;
  handleSearchChange: (value: string) => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({ searchValue, handleSearchChange }, ref) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  return (
    <div className={containerStyle}>
      <IcSearchGray width={24} />
      <input
        type="text"
        ref={ref}
        value={searchValue}
        placeholder="장르나 댄서 네임을 검색해 보세요"
        onChange={handleInputChange}
        className={inputStyle}
      />
      <IcXCircleGray width={24} onClick={() => handleSearchChange('')} />
    </div>
  );
});

export default SearchBar;
