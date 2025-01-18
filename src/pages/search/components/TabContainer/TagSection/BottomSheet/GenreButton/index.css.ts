import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const genreButtonStyle = recipe({
  base: {
    padding: '1.2rem 1.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
    ...vars.fonts.b4,
    transition: 'background-color 0.3s, color 0.3s',
    color: vars.colors.gray09,
  },
  variants: {
    state: {
      selected: {
        backgroundColor: vars.colors.main03,
        color: vars.colors.white,
      },
      unselected: {
        backgroundColor: '#f4f4f4',
        color: '#333',
      },
    },
  },
  defaultVariants: {
    state: 'unselected',
  },
});

export const buttonContainer = recipe({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
});
