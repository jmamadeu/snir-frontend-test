import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';

export const COLORS = {
  background: '#2E2938',
  text: '#B4ACF9',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  white: '#ffffff',
};

export const FONTS = {
  body: 'Asap',
};

const overrides = {
  colors: COLORS,
  fonts: FONTS,
  ...globalStyles,
};

const theme = extendTheme(overrides);

export { theme };
