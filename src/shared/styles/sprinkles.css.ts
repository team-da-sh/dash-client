import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const MIN_WIDTH = 375;

const createNumberArray = (length: number) => {
  return Array.from({ length: length }, (_, i) => i + 1);
};

const numberArray = createNumberArray(MIN_WIDTH);
const percentArray = Array.from({ length: 100 }, (_, i) => `${i + 1}%`);

const flexProperties = defineProperties({
  properties: {
    display: ['flex'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: numberArray,
  },
});

const layoutProperties = defineProperties({
  properties: {
    position: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
    width: [...numberArray, ...percentArray],
    height: [...numberArray, ...percentArray],
    margin: numberArray,
    marginTop: numberArray,
    marginBottom: numberArray,
    marginRight: numberArray,
    marginLeft: numberArray,
    padding: numberArray,
    paddingTop: numberArray,
    paddingBottom: numberArray,
    paddingRight: numberArray,
    paddingLeft: numberArray,
  },
  shorthands: {
    p: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],

    m: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
  },
});

export const sprinkles = createSprinkles(flexProperties, layoutProperties);
