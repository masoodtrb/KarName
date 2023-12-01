'use client';

import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function ReactQueryProvider({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <div id='rq-dev'>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
      </div>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
