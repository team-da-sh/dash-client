import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const cardContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '1.6rem',
});

export const locationBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const locationTitle = style({
  ...vars.fonts.b4,
});

export const addressRow = style({
  ...vars.fonts.b7,
  display: 'flex',
  justifyContent: 'space-between',
});

export const addressLeft = style({
  fontWeight: 'bold',
  width: '4rem',
  color: vars.colors.gray06,
});

export const addressRight = style({
  textAlign: 'left',
  flex: 1,
  color: vars.colors.gray07,
});
