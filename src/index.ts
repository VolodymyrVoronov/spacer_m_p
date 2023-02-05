type Spacer = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const getSpace = (spacer: Spacer = 5, withPx: boolean = true): string | number => {
  let gap;

  if (spacer >= 1 && spacer <= 10) {
    switch (spacer) {
      case 1:
        gap = withPx ? '4px' : 4;
        break;

      case 2:
        gap = withPx ? '8px' : 8;
        break;

      case 3:
        gap = withPx ? '16px' : 16;
        break;

      case 4:
        gap = withPx ? '20px' : 20;
        break;

      case 5:
        gap = withPx ? '24px' : 24;
        break;

      case 6:
        gap = withPx ? '32px' : 32;
        break;

      case 7:
        gap = withPx ? '48px' : 48;
        break;

      case 8:
        gap = withPx ? '64px' : 64;
        break;

      case 9:
        gap = withPx ? '96px' : 96;
        break;

      case 10:
        gap = withPx ? '160px' : 160;
        break;

      default:
        break;
    }

    return gap as string | number;
  } else {
    return (gap = withPx ? '24px' : 24);
  }
};

export default getSpace;
