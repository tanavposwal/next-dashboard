import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader showSpinner={false} color='rgb(37,137,254)' />
        {children}
      </body>
    </html>
  );
}
