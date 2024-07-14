import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucas Fonseca',
  description:
    'Explore meu portfólio e mergulhe no mundo do desenvolvimento web comigo, Lucas Fonseca. Sou apaixonado por criar soluções web inovadoras e eficientes. Descubra meu trabalho em programação web, desenvolvimento de software e mais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
