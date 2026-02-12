import { style } from '@vanilla-extract/css';

export const divCustomStyle = style({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '8.4rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

export const headerWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  position: 'relative',
});

export const tabListWrapperStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const dropdownTriggerStyle = style({
  display: 'flex',
  alignItems: 'center',
});
