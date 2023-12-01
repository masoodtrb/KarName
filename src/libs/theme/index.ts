import localFont from 'next/font/local';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const iranYekan = localFont({
  src: [
    {
      path: '../../fonts/woff/iranyekanwebregular.woff',
      style: 'normal',
    },
    {
      path: '../../fonts/woff/iranyekanweblight.woff',
      style: 'light',
      weight: '300',
    },
    {
      path: '../../fonts/woff/iranyekanwebbold.woff',
      style: 'bold',
      weight: '700',
    },
  ],
});
export const roboto = localFont({
  src: [
    {
      path: '../../fonts/woff/robotoregular.woff',
      style: 'normal',
    },
    {
      path: '../../fonts/woff/robotolight.woff',
      style: 'light',
      weight: '300',
    },
    {
      path: '../../fonts/woff/robotobold.woff',
      style: 'bold',
      weight: '700',
    },
  ],
});

const theme = extendTheme({
  config,
  fonts: {
    body: `${iranYekan.style.fontFamily}`,
    heading: `${iranYekan.style.fontFamily}`,
    mono: `${iranYekan.style.fontFamily}`,
  },
  styles: {
    global: {
      '*': {
        fontFamily: `${iranYekan.style.fontFamily}`,
      },
    },
  },
});

export default theme;
