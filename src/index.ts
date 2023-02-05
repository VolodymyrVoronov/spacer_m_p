type Spacer = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const getSpace = (spacer: Spacer = 5, withPx: boolean = true): string | number => {
  const spacers = {
    1: 4,
    2: 8,
    3: 16,
    4: 20,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
    9: 96,
    10: 160,
  };

  return withPx ? spacers[spacer] + 'px' : spacers[spacer];
};

export default getSpace;
