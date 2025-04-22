import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const buttonStyle = recipe({
  base: {
    width: '100%',

    border: 'none',
    borderRadius: '4px',

    color: vars.colors.white,

    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        padding: '1.8rem 0',
        backgroundColor: vars.colors.main04,

        color: vars.colors.white,
        ...vars.fonts.b1_sb,

        '&:disabled': {
          backgroundColor: vars.colors.gray05,
          cursor: 'default',
        },
      },
      secondary: {
        display: 'flex',
        justifyContent: 'center',

        width: '7.8rem',
        padding: '1.8rem 0',

        backgroundColor: vars.colors.gray03,

        color: vars.colors.gray07,
        ...vars.fonts.b1_sb,

        '&:disabled': {
          cursor: 'default',
        },
      },

      outline: {
        padding: '0.8rem 0',

        border: `0.5px solid ${vars.colors.gray09}`,
        backgroundColor: vars.colors.main03,

        ...vars.fonts.b3_m_narrow,

        '&:disabled': {
          border: `0.5px solid ${vars.colors.gray04}`,
          backgroundColor: vars.colors.gray01,

          color: vars.colors.gray05,

          cursor: 'default',
        },
      },

      temp: {
        padding: '0.8rem 0',

        border: `0.5px solid ${vars.colors.gray04}`,
        backgroundColor: vars.colors.gray01,

        color: vars.colors.gray05,
        ...vars.fonts.b3_m_narrow,

        cursor: 'default',
      },

      heart: {
        display: 'flex',
        justifyContent: 'center',

        width: '7.8rem',
        height: '5.4rem',
        padding: '1.3rem 2.5rem',

        backgroundColor: vars.colors.gray03,

        color: vars.colors.gray07,
        ...vars.fonts.b1_sb,

        '&:disabled': {
          cursor: 'default',
        },
      },
    },
  },
});
