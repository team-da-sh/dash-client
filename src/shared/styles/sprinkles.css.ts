import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const MIN_WIDTH = 375;

const createNumberArray = (length: number) => {
  return Array.from({ length: length }, (_, i) => i + 1);
};

const createEvenNumberArray = (length: number) => {
  return Array.from({ length: length }, (_, i) => 2 * (i + 1));
};

const createPercentArray = () => {
  return Array.from({ length: 100 }, (_, i) => `${i + 1}%`);
};

const flexProperties = defineProperties({
  properties: {
    display: ['flex'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: createEvenNumberArray(50),
  },
});

const layoutProperties = defineProperties({
  properties: {
    position: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
    width: [...createNumberArray(MIN_WIDTH), ...createPercentArray()],
    height: [...createNumberArray(MIN_WIDTH), ...createPercentArray()],
    marginTop: createNumberArray(MIN_WIDTH),
    marginBottom: createNumberArray(MIN_WIDTH),
    marginRight: createNumberArray(MIN_WIDTH),
    marginLeft: createNumberArray(MIN_WIDTH),
    paddingTop: createNumberArray(MIN_WIDTH),
    paddingBottom: createNumberArray(MIN_WIDTH),
    paddingRight: createNumberArray(MIN_WIDTH),
    paddingLeft: createNumberArray(MIN_WIDTH),
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
