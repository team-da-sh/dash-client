import { style } from '@vanilla-extract/css';

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
