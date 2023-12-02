import Provider from '@/libs/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fa' translate='no' dir='rtl'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
