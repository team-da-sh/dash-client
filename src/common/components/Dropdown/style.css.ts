import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',
});

export const triggerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',

  padding: '0.8rem 0.8rem 0.8rem 1.6rem',

  border: '1px solid var(--grayscale-gray-02, #E5E7EB)',
  borderRadius: '4px',

  ...vars.fonts.b2_m,

  cursor: 'pointer',
});

export const arrowStyle = recipe({
  variants: {
    direction: {
      up: {
        transition: 'transform 0.3s ease',
        transform: 'rotate(180deg)',
      },
      down: {
        transition: 'transform 0.3s ease',
        transform: 'rotate(0deg)',
      },
    },
  },
});

export const listStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  position: 'absolute',

  width: 'calc(100% - 2rem)',
  padding: '1.6rem',
  marginTop: '5.8rem',

  borderRadius: '4px',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.10)',
});

export const itemStyle = recipe({
  base: {
    width: '100%',
    padding: '1rem 0.8rem',

    borderRadius: '4px',
    ...vars.fonts.b2_m,

    cursor: 'pointer',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.colors.main03,
        color: vars.colors.gray01,
      },
      false: {
        ':hover': {
          backgroundColor: vars.colors.main01,
        },
      },
    },
  },
});
