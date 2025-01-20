import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const genreImageStyle = style({
  width: '8.4rem',
  height: '8.4rem',

  borderRadius: '100%',
});

export const genreCheckboxContainerStyle = style({
  cursor: 'pointer',
});

export const imageStyle = recipe({
  base: {
    width: '8.4rem',
    height: '8.4rem',

    borderRadius: '100%',
  },
  variants: {
    isChecked: {
      true: {
        filter: 'brightness(0.5)',
      },
    },
  },
});

export const imageWrapperStyle = style({
  position: 'relative',
  width: '8.4rem',
  height: '8.4rem',
});

export const checkboxStyle = style({
  display: 'none',
});

export const checkStyle = recipe({
  base: {
    position: 'absolute',
  },
  variants: {
    isChecked: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },
});
