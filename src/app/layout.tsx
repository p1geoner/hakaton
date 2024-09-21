import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { Metrika, ScrollToTop, StoreProvider } from '@/components/new-logic';
import { AuthProvider } from '@/components/new-logic/auth-provider/AuthProvider';

import '@/assets/styles/index.scss';
import { Header } from '@/components/new-layouts/wrappers/header/Header';

export const metadata: Metadata = {
  title: '',
  description: 'Курсы.',
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONT_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Навигатор Карьеры',
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONT_URL}/og.png`,
        width: 1161,
        height: 516,
        alt: 'Навигатор Карьеры',
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONT_URL}/favicon.ico`,
        width: 120,
        height: 120,
        alt: 'Навигатор Карьеры',
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='yandex-verification' content='805951d0f8175791' />
        <meta name='yandex-verification' content='2c0a60413eab00a3' />
      </head>
      <body>
        <div id='root'>
          <div className='App'>
            <StoreProvider>
              <AuthProvider>
                <Header />
                {children}
                <ScrollToTop />
                {/* <Footer />*/}
              </AuthProvider>
              <ToastContainer />
            </StoreProvider>
            <Metrika />
          </div>
        </div>
      </body>
    </html>
  );
}
