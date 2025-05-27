import { forwardRef } from 'react';
import * as styles from '@/pages/search/components/SearchBar/searchBar.css';
import IcSearchGray from '@/shared/assets/svg/IcSearchGray';
import IcXCircleGray from '@/shared/assets/svg/IcXCircleGray';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface SearchBarPropTypes {
  searchValue: string;
  handleSearchChange: (value: string) => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarPropTypes>(({ searchValue, handleSearchChange }, ref) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.target.value);
  };

  return (
    <div className={styles.containerStyle}>
      <div
        className={sprinkles({
          display: 'flex',
          width: '100%',
          gap: 6,
        })}>
        <IcSearchGray width={24} />
        <input
          type="text"
          ref={ref}
          value={searchValue}
          placeholder="장르 or 댄서 네임을 검색해 보세요"
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
      </div>

      <IcXCircleGray width={24} height={24} onClick={() => handleSearchChange('')} />
    </div>
  );
});

export default SearchBar;
