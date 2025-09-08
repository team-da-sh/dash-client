import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  height: 'calc(100dvh - 6rem)',
  padding: '3.3rem 2rem',

  backgroundColor: vars.colors.gray01,
});

export const classInfoTitleStyle = style({
  marginBottom: '1.2rem',
});

export const classInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  justifyContent: 'center',

  width: '100%',
  marginTop: '0.8rem',
});

export const cardStyle = style({
  padding: '2rem',
  marginTop: '1.6rem',

  borderRadius: '4px',

  backgroundColor: vars.colors.white,
});

export const classHeaderStyle = style({
  marginTop: '2rem',
  marginBottom: '1.6rem',
});

export const titleStyle = style({
  marginTop: '3.2rem',
  marginBottom: '1.2rem',
});

export const applyDateStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',

  marginTop: '1.2rem',
});

export const applicantWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  marginTop: '4rem',
});
