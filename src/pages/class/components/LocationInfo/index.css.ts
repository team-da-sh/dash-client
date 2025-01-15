import { style } from '@vanilla-extract/css';

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
  gap: '0.6rem',
});

export const addressDetail = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});
export const addressRow = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const addressLeft = style({
  marginRight: '0.4rem',
});

export const addressRight = style({
  textAlign: 'left',
  flex: 1,
});
