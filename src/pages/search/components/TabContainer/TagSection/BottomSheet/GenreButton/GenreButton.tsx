import * as styles from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/genreButton.css';

interface GenreButtonPropTypes {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const GenreButton = ({ category, isSelected, onClick }: GenreButtonPropTypes) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.genreButtonStyle({
      state: isSelected ? 'selected' : 'unselected',
    })}>
    {category}
  </button>
);

export default GenreButton;
