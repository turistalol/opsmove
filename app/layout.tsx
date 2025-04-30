import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'OPS MOVE | Serviço de Transporte Rápido, Seguro e Econômico',
  description: 'OPS MOVE é um serviço moderno de transporte oferecendo corridas rápidas, seguras e econômicas. Baixe o aplicativo ou torne-se um motorista hoje!',
  keywords: 'transporte, táxi, serviço de carro, vagas para motorista, mobilidade urbana, aplicativo de corridas',
  authors: [{ name: 'OPS MOVE' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://opsmove.com',
    title: 'OPS MOVE | Serviço de Transporte Rápido, Seguro e Econômico',
    description: 'OPS MOVE é um serviço moderno de transporte oferecendo corridas rápidas, seguras e econômicas.',
    siteName: 'OPS MOVE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPS MOVE | Serviço de Transporte Rápido, Seguro e Econômico',
    description: 'OPS MOVE é um serviço moderno de transporte oferecendo corridas rápidas, seguras e econômicas.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}