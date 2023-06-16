interface Theme {
  colors: Colors;
  fontSizes: FontSizes;
}

interface FontSizes {
  m: number;
  s: number;
}
interface Colors {
  pureBlack: string;
  pureWhite: string;
  blue: string;
  darkBlue: string;
  greenPrimary: string;
  greenSecondary: string;
  red: string;
  grey: string;
  //The last number indicates the opacity percent (01-1%, 1-10%, 8-80% etc)
  greyWithOpacity8: string;
  yellowPrimary: string;
  black: string;
}

const theme: Theme = {
  colors: {
    pureBlack: '#000000',
    pureWhite: '#FFFFFF',
    blue: '#3197FF',
    darkBlue: '#131920',
    greenPrimary: '#06D6A0',
    greenSecondary: '#06D6A0CC',
    red: '#FF595E',
    grey: '#999EAB',
    greyWithOpacity8: '#999EABCC',
    black: '#090F15',
    yellowPrimary: '#FDAB0E',
  },
  fontSizes: {
    s: 20,
    m: 25,
  },
};

export default theme;
