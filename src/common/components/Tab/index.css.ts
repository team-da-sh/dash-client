import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const tabButtonStyle = recipe({
  base: {
    padding: '0 0 1rem',
    backgroundColor: 'transparent',
    border: 'none',
    position: 'relative',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap',
  },
  variants: {
    colorScheme: {
      primary: {},
      secondary: {},
      tertiary: {},
      plain: {},
    },
    state: {
      active: {
        borderBottom: '0.2rem solid',
      },
      inactive: {
        borderBottom: '0.2rem solid transparent',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        colorScheme: 'primary',
        state: 'active',
      },
      style: {
        color: vars.colors.main04,
        ...vars.fonts.h6_sb,
        ':after': {
          backgroundColor: vars.colors.main04,
        },
      },
    },
    {
      variants: {
        colorScheme: 'primary',
        state: 'inactive',
      },
      style: {
        ...vars.fonts.h6_sb,
        color: vars.colors.gray04,
      },
    },
    {
      variants: {
        colorScheme: 'secondary',
        state: 'active',
      },
      style: {
        color: vars.colors.black,
        ...vars.fonts.b1_sb,
        ':after': {
          backgroundColor: vars.colors.black,
        },
      },
    },
    {
      variants: {
        colorScheme: 'secondary',
        state: 'inactive',
      },
      style: {
        ...vars.fonts.b1_sb,
        color: vars.colors.gray05,
      },
    },
    {
      variants: {
        colorScheme: 'tertiary',
        state: 'active',
      },
      style: {
        color: vars.colors.main04,
        ...vars.fonts.h6_sb,
        ':after': {
          backgroundColor: vars.colors.main04,
        },
      },
    },
    {
      variants: {
        colorScheme: 'tertiary',
        state: 'inactive',
      },
      style: {
        color: vars.colors.gray05,
        ...vars.fonts.h6_sb,
      },
    },
    {
      variants: {
        colorScheme: 'plain',
        state: 'active',
      },
      style: {
        padding: 0,

        color: vars.colors.black,
        ...vars.fonts.h5_sb,
        border: 'none',
      },
    },
    {
      variants: {
        colorScheme: 'plain',
        state: 'inactive',
      },
      style: {
        padding: 0,

        color: vars.colors.gray04,
        ...vars.fonts.h5_sb,
        border: 'none',
      },
    },
  ],
  defaultVariants: {
    colorScheme: 'primary',
    state: 'inactive',
  },
});

export const tabListStyle = recipe({
  base: {
    display: 'flex',
    borderBottom: 'none',
  },
  variants: {
    gap: {
      fixed: {
        gap: '2.4rem',
      },
      responsive: {
        justifyContent: 'center',
        gap: 'clamp(2.4rem, 10vw, 4.8rem)',
      },
    },
  },
  defaultVariants: {
    gap: 'fixed',
  },
});

export const tabRootStyle = style({
  width: '100%',
});

export const tabPanelStyle = style({
  width: '100%',
});
