import { IcSearchGray, IcXCircleGray } from '@/assets/svg';
import { searchBarContainerStyle, searchGrayStyle, xCircleGrayStyle } from './index.css';

const SearchBar = () => {
  return (
    <div className={searchBarContainerStyle}>
      <IcSearchGray className={searchGrayStyle} width={24} />
      <input></input>
      <IcXCircleGray className={xCircleGrayStyle} width={24} />
    </div>
  );
};

export default SearchBar;
