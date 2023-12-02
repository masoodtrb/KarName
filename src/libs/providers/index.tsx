import React from 'react';
import { ChakraUiProvider } from './chakraUiProvider';
import ReactQueryProvider from './ReactQueryProvider';

function Index({ children }: { children: React.ReactNode }) {
  return (
    <ChakraUiProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ChakraUiProvider>
  );
}

export default Index;
