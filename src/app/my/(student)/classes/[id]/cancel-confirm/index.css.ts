import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  minHeight: 'calc(100dvh - 6rem)',

  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  height: '100%',
});

export const dividerStyle = style({
  width: '100vw',

  border: 'none',
  borderTop: `11px solid ${vars.colors.gray02}`,

  transform: 'translate(-20px, -3px)',
});

export const mainWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '4rem',
  paddingTop: '2.4rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',
});

export const titleWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const titleContentStyle = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '0.8rem',
});

export const sectionWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  paddingTop: '2.4rem',
});

export const classInfoWrapper = style({
  padding: '2rem',

  background: vars.colors.white,
  borderRadius: '4px',
});

export const classInfoSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  paddingTop: '4rem',
  paddingBottom: '4rem',
});

export const buttonStyle = style({
  width: '100%',
});
