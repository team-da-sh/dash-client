import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const buttonStyle = recipe({
  base: {
    border: 'none',
    borderRadius: '4px',

    color: 'white',

    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        padding: ''
        backgroundColor: vars.colors.main04,

        color: vars.colors.white,
        ...vars.fonts.head05,

        '&:disabled': {
          backgroundColor: vars.colors.gray05,
        },
      },
    },
  },
});
