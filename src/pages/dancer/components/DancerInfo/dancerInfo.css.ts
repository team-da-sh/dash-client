import { style } from '@vanilla-extract/css';
import { hideScrollbar } from '@/shared/styles/utils.css';

export const rowScrollStyle = style([
  hideScrollbar,
  {
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    gap: '0.8rem',
    paddingBottom: '3.6rem',

    overflowX: 'auto',
  },
]);

export const classItemStyle = style({
  flex: '0 0 auto',
});

export const firstClassItemStyle = style({
  paddingLeft: '2rem',
});

export const lastClassItemStyle = style({
  paddingRight: '2rem',
});

export const detailStyle = style({
  whiteSpace: 'pre-line',
  wordBreak: 'break-word',
});

export const linkStyle = style({
  display: 'inline-block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '14ch',
});
