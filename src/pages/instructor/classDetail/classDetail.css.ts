import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const layoutStyle = style({
  // TODO: 문제 없는지 확인 필요
  // height: 'calc(100dvh - 6rem)',
  minHeight: '100dvh',

  backgroundColor: vars.colors.gray01,
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem 2rem 1.6rem',
});

export const studentCardWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const dividerStyle = style({
  width: '100vw',

  border: 'none',
  borderTop: `1px solid ${vars.colors.gray03}`,

  transform: 'translate(-20px, -3px)',
});

export const emptyTextStyle = style({
  width: '17rem',

  margin: '5.4rem auto 0 auto',
});

export const tabListStyle = style({
  display: 'flex',
  gap: '1.6rem',
  paddingLeft: '2rem',
});

export const tabPanelStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '0rem 2rem 3.6rem',
});
