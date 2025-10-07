import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const reservationStyle = style({
  backgroundColor: vars.colors.gray01,
});

export const headerStyle = style({
  zIndex: vars.zIndex.three,
});

export const agreementBoxStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '2rem',
  marginBottom: '0.4rem',

  width: '100%',
  gap: '1.2rem',

  border: '1px solid',
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
});

export const agreementCheckedStyle = style({
  borderColor: vars.colors.main04,
});

export const agreementUncheckedStyle = style({
  borderColor: vars.colors.gray04,
});

export const totalPriceContainerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  padding: '1.8rem 2rem 10.8rem 2rem',
});

export const priceWrapperStyle = style({
  display: 'flex',
  gap: '0.1rem',
});
