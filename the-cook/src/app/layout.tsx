import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: 'Próximo Prato',
    template: '%s | Próximo Prato',
  },
  description: 'Projeto do curso de NextJS 15 com React 19 e Tailwind 4',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Container>
          <Header />
          <main>{children}</main>

          <footer>
            <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>FOOTER</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
