// src/components/rtl-provider.js
import { PropsWithChildren } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtl from 'stylis-plugin-rtl';

interface Props extends PropsWithChildren<unknown> {}
const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
};

export function RtlProvider({ children }: Props) {
  const cache = createCache(options['rtl']);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
