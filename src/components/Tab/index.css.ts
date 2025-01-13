import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const tabButtonStyle = recipe({
  base: {
    padding: '0 0 1rem',
    backgroundColor: 'transparent',
    border: 'none',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  variants: {
    colorScheme: {
      main: {},
      dark: {},
    },
    state: {
      active: {
        ':after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '0.2rem',
        },
      },
      inactive: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        colorScheme: 'main',
        state: 'active',
      },
      style: {
        color: vars.colors.main04,
        ...vars.fonts.h5,
        ':after': {
          backgroundColor: vars.colors.main04,
        },
      },
    },
    {
      variants: {
        colorScheme: 'main',
        state: 'inactive',
      },
      style: {
        ...vars.fonts.h5,
        color: vars.colors.gray04,
      },
    },
    {
      variants: {
        colorScheme: 'dark',
        state: 'active',
      },
      style: {
        color: vars.colors.black,
        ...vars.fonts.h6,
        ':after': {
          backgroundColor: vars.colors.black,
        },
      },
    },
    {
      variants: {
        colorScheme: 'dark',
        state: 'inactive',
      },
      style: {
        ...vars.fonts.h6,
        color: vars.colors.gray05,
      },
    },
  ],
  defaultVariants: {
    colorScheme: 'main',
    state: 'inactive',
  },
});

export const tabListStyle = style({
  display: 'flex',
  gap: '2.4rem',
  borderBottom: 'none',
});
