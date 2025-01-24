import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const levelButtonStyle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '0.8rem',
    padding: '1.6rem 2rem',
    backgroundColor: vars.colors.gray01,
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.colors.main03,
      },
      false: {
        backgroundColor: vars.colors.gray01,
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const onboardingLevelButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  width: '100%',
  padding: '1.6rem 2rem',

  borderRadius: '4px',
  outline: `1px solid ${vars.colors.gray03}`,

  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
});

export const headCustomStyle = style({
  whiteSpace: 'nowrap',
});
