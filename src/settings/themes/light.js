import { lighten, darken } from 'polished';
import {
  palette,
  BIFROST_BLUE,
  YGGDRASIL_GREEN,
  FLASH_ORANGE,
  SURTR_RED,
} from './palette';

const { secondary, dark } = palette;

const COL_DARKEN_RATE = 0.15;
const COL_LIGHTEN_RATE = 0.35;
const theme = {};

const DARK_COL = darken(COL_DARKEN_RATE, BIFROST_BLUE);
const LIGHT_COL = lighten(0.2, BIFROST_BLUE);

const DARK_COL_BASE = darken(COL_DARKEN_RATE, YGGDRASIL_GREEN);
const LIGHT_COL_BASE = lighten(0.2, YGGDRASIL_GREEN);

theme.palette = {
  gradient: [
    `linear-gradient(9.34deg, ${YGGDRASIL_GREEN} 19.28%, ${BIFROST_BLUE} 106.03%)`, // 0: Default
    `linear-gradient(9.34deg, ${DARK_COL_BASE} 19.28%, ${DARK_COL} 106.03%)`, // darken col
    `linear-gradient(9.34deg, ${LIGHT_COL_BASE} 19.28%, ${LIGHT_COL} 106.03%)`, // lighten col
  ],
  primary: [
    YGGDRASIL_GREEN, // 0 primary
  ],
  secondary: [
    BIFROST_BLUE, // 0 secondary
    secondary[0], // 1 box-shadow, hover
  ],
  warning: [
    FLASH_ORANGE, // 0: Warning
    darken(COL_DARKEN_RATE, FLASH_ORANGE), // darken col
    lighten(COL_LIGHTEN_RATE, FLASH_ORANGE), // lighten col
    `linear-gradient(47.73deg, ${FLASH_ORANGE} 0%, ${FLASH_ORANGE} 100%)`, // gradient
  ],
  success: [
    YGGDRASIL_GREEN, // 0: Success
    darken(COL_DARKEN_RATE, YGGDRASIL_GREEN), // darken col
    lighten(COL_LIGHTEN_RATE, YGGDRASIL_GREEN), // lighten col
    `linear-gradient(47.73deg, ${YGGDRASIL_GREEN} 0%, ${YGGDRASIL_GREEN} 100%)`, // gradient
  ],
  error: [
    SURTR_RED, // 0: Error
    darken(COL_DARKEN_RATE, SURTR_RED), // darken col
    lighten(COL_LIGHTEN_RATE, SURTR_RED), // lighten col
    `linear-gradient(47.73deg, ${SURTR_RED} 0%, ${SURTR_RED} 100%)`, // gradient
  ],
  gray: [
    dark[0], // 0: Border
    dark[1], // 0: step bar, txstatus bg
  ],
  background: [
    '#fff', // 0: header, footer bg
    '#fff', // 1: main bg
    dark[0], // 2: content bg, hover
  ],
  text: [
    dark[8], // 0: Normal Text (normal)
    dark[9], // 1: Active (dark)
    dark[6], // 2: light text
    '#fff', // 3: white text
  ],
};

theme.sizes = {
  headerHeight: '70px',
  footerHeight: '50px',
  panelHeight: '550px',
  panelHeaderHeight: '50px',
  lineHeight: '50px',
  crypto: '35px',
  icon: '16px',
  social: '17px',
  gutter: {
    horizontal: '30px',
    vertical: '20px',
  },
  button: {
    small: {
      width: '55px',
      height: '20px',
    },
    normal: {
      width: '100px',
      height: '30px',
    },
    big: {
      width: '166px',
      height: '70px',
    },
  },
  tooltip: {
    small: '15px',
    normal: '30px',
  },
  font: {
    tiny: '8px',
    small: '10px',
    normal: '12px',
    big: '15px',
    large: '18px',
  },
  coin: {
    small: '30px',
    big: '40px',
  },
};

theme.fonts = {
  primary: 'Exo 2',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
};

export default theme;
