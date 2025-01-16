import { DANCER_LIST } from '@/constants/mock/DancerList';
import DancerList from './DancerList';

const Search = () => {
  return <DancerList dancers={DANCER_LIST} />;
};

export default Search;
