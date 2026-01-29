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

export const tabTitleStyle = style({
  marginLeft: '2rem',
  marginBottom: '2rem',
});

export const classInfoSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
