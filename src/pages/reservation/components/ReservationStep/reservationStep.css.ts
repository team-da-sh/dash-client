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

export const mainStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const sectionStyle = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  paddingTop: '2.4rem',
  paddingRight: '2rem',
  paddingBottom: '4rem',
  paddingLeft: '2rem',
  gap: '4rem',
});

export const sectionContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.6rem',
});

export const agreementSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '3.4rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',
});

export const titleStyle = style({
  paddingBottom: '1.6rem',
});

export const agreementWrapperStyle = style({
  paddingBottom: '2rem',
});

export const noticeWrapperStyle = style({
  paddingBottom: '4.2rem',
});

export const dividerWrapperStyle = style({
  paddingLeft: '2rem',
  paddingRight: '2rem',
});
