import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const tagStyle = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.colors.white,
  },
  variants: {
    type: {
      genre: {
        backgroundColor: vars.colors.main03,
      },
      level: {
        backgroundColor: vars.colors.sub07,
      },
      deadline: {
        backgroundColor: vars.colors.gray10,
      },
    },
    size: {
      small: {
        height: '1.8rem',
        borderRadius: '2px',
        padding: '0.4rem 0.6rem',
        gap: '1rem',
        ...vars.fonts.caption01_med,
      },
      medium: {
        borderRadius: '2.4px',
        padding: '0.3rem 0.8rem',
        gap: '1.2rem',
        ...vars.fonts.body02_med,
      },
      thumbnail: {
        borderRadius: '0px 4px 4px 0px',
        padding: '0.2rem 0.8rem',
        gap: '1rem',
        ...vars.fonts.caption01_med,
      },
    },
  },
});
