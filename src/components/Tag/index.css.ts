import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const tagBase = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.colors.white,
});

export const tagTypeStyles = styleVariants({
  genre: {
    backgroundColor: vars.colors.main03,
  },
  level: {
    backgroundColor: vars.colors.sub07,
  },
  deadline: {
    backgroundColor: vars.colors.gray10,
  },
});

export const tagSizeStyles = styleVariants({
  small: {
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
  },
});
