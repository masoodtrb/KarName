'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';

export function ChakraUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {/* <ColorModeScript initialColorMode={theme.config?.initialColorMode} /> */}
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
