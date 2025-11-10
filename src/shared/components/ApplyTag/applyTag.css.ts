import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const tagStyle = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '0.1rem 0.6rem',

    borderRadius: '4px',

    ...vars.fonts.c1_m,
  },
  variants: {
    variant: {
      PENDING_APPROVAL: {
        backgroundColor: vars.colors.sub01,
        color: vars.colors.sub07,
      },
      APPROVED: {
        backgroundColor: vars.colors.main01,
        color: vars.colors.main06,
      },
      PENDING_CANCELLATION: {
        backgroundColor: '#FFD4D4',
        color: vars.colors.alert02,
      },
      CANCELLED: {
        backgroundColor: vars.colors.gray02,
        color: vars.colors.gray08,
      },
      COMPLETED: {
        backgroundColor: vars.colors.gray02,
        color: vars.colors.gray08,
      },
    },
  },
});
