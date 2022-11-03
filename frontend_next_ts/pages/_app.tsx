import { useState } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function MyApp({ Component, pageProps }: AppProps) {
  // const queryClient = new QueryClient();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <Component {...pageProps} />
      {/* </Hydrate> */}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
