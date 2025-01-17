import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const reservationStyle = style({
  backgroundColor: vars.colors.gray01,
});

export const headerStyle = style({
  zIndex: 10,
});

export const agreementContainer = style({
  width: '100%',
});

export const agreementBox = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  border: '1px solid',
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '4px',
  cursor: 'pointer',
  marginBottom: '0.4rem',
});

export const agreementChecked = style({
  borderColor: vars.colors.main04,
});

export const agreementUnchecked = style({
  borderColor: vars.colors.gray04,
});

export const totalPriceContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1.8rem 2rem 11.8rem 2rem',
  alignItems: 'center',
});
