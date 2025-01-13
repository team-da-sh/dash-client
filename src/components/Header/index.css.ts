import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const headerRoot = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  width: '100%',
  height: '6rem',
  alignItems: 'center',
  padding: '1.8rem 2rem',
  position: 'fixed',
});

export const backIconStyle = style({
  gridColumn: '1',
  justifySelf: 'start',
});

export const titleStyle = style({
  gridColumn: '2',
  textAlign: 'center',
  ...vars.fonts.head04,

  justifySelf: 'center',
});

export const closeIconStyle = style({
  gridColumn: '3',
  justifySelf: 'end',
});
