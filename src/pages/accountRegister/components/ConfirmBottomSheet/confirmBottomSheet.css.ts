import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

// bottomSheet open/close animations
const slideUp = keyframes({
  from: { transform: 'translate(-50%, 100%)' },
  to: { transform: 'translate(-50%, 0)' },
});

// const slideDown = keyframes({
//   from: { transform: 'translate(-50%, 0)' },
//   to: { transform: 'translate(-50%, 100%)' },
// });

export const slideUpStyle = style({
  animation: `${slideUp} 450ms ease-in-out forwards`,
});

// export const slideDownStyle = style({
//   animation: `${slideDown} 300ms ease forwards`,
// });

export const overlayStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
  height: '100vh',
  width: '100%',

  background: vars.colors.black70,
  zIndex: vars.zIndex.two,
});

export const containerStyle = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3.2rem 2.4rem 2.8rem 2.4rem',

  width: '100%',
  height: '41rem',

  borderRadius: '16px 16px 0 0',
  backgroundColor: vars.colors.white,

  zIndex: vars.zIndex.three,

  transition: 'transform 300ms ease',
});

export const topContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.2rem',
});

export const titleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const subTitleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
});

export const infoContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.8rem 2.4rem',
  marginTop: '2.8rem',
  gap: '1.4rem',

  width: '100%',

  borderRadius: '11px',
  border: `1px solid ${vars.colors.gray02}`,
});

export const infoRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.8rem',
});

export const accountNumberStyle = style({
  display: 'flex',
  gap: '0.6rem',
});

export const buttonContainerStyle = style({
  display: 'flex',
  gap: '0.8rem',

  marginTop: '3.6rem',
  width: '100%',
  height: '5.4rem',
});

// TODO: 버튼 비율 QA 이후 확정
export const secondaryButtonStyle = style({
  flex: 1,
  whiteSpace: 'nowrap',
});

export const primaryButtonStyle = style({
  flex: 2,
});
