import * as styles from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/genreButton.css';

interface GenreButtonPropsTypes {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const GenreButton = ({ category, isSelected, onClick }: GenreButtonPropsTypes) => (
  <button
    onClick={onClick}
    className={styles.genreButtonStyle({
      state: isSelected ? 'selected' : 'unselected',
    })}>
    {category}
  </button>
);

export default GenreButton;
