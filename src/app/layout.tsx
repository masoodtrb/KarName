import { Inter } from 'next/font/google';
import Provider from '@/libs/providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fa' translate='no' dir='rtl'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
