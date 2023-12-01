import React from "react";
import { ChakraUiProvider } from "./chakraUiProvider";
import ReactQueryProvider from "./ReactQueryProvider";

function Index({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ChakraUiProvider>{children}</ChakraUiProvider>
    </ReactQueryProvider>
  );
}

export default Index;
