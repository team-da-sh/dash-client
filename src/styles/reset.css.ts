import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  maxWidth: 'var(--max-width)',
});

/* Box sizing */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

/* Remove default margin and padding */
globalStyle(
  'body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
  }
);

globalStyle('html', {
  padding: 0,
  border: 0,
  verticalAlign: 'baseline',
});

/* Set default body styles */
globalStyle('body', {
  lineHeight: '1.5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  height: '100%',
  width: '100%',
});

/* Remove list styles */
globalStyle('ol, ul', {
  listStyle: 'none',
});

/* Remove default styles for blockquote and q */
globalStyle('blockquote, q', {
  quotes: 'none',
});
globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: '',
});

/* Remove default table styles */
globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

/* Set default link styles */
globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

/* Set default image and media styles */
globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

/* Set default input and button styles */
globalStyle('input, button, textarea, select', {
  font: 'inherit',
  color: 'inherit',
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'none',
  outline: 'none',
});
