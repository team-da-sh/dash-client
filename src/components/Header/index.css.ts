import { style } from '@vanilla-extract/css';

export const headerRootStyle = style({
  position: 'fixed',
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  width: '100%',
  height: '6rem',
  padding: '1.8rem 2rem',
});

export const backIconStyle = style({
  gridColumn: '1',
  justifySelf: 'start',
});

export const titleStyle = style({
  gridColumn: '2',
  justifySelf: 'center',
  textAlign: 'center',
});

export const closeIconStyle = style({
  gridColumn: '3',
  justifySelf: 'end',
});
