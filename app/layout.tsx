import type { Metadata } from 'next';
import { Afacad_Flux, Geist_Mono,  } from 'next/font/google';
import './globals.css';
import { Encabezado } from './_componentes/Encabezado';
import WhatsAppButton from './_componentes/WhatsApp';
import Footer from './_componentes/Footer';

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

const afacadSans = Afacad_Flux({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Fabio Tommasi | Agro',
  description: 'Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.',
  metadataBase: new URL('https://fabiotommasi.com.ar'),
  openGraph: {
    title: 'Fabio Tommasi | Agro',
    description: 'Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.',
    images: ['/opengraph-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabio Tommasi | Agro',
    description: 'Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.',
    creator: '@tisoler',
    images: ['/opengraph-image.jpg'],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  generator: 'Next.js',
  applicationName: 'fabioTommasiAgro',
  authors: [{ name: 'Tisoler', url: 'https://github.com/tisoler' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${afacadSans.className} ${geistMono.className} antialiased`}
      >
        <Encabezado />
        <main className='relative'>
          {children}
          <aside className='absolute right-0 bottom-0 w-0 md:w-3 h-[60rem] bg-color-marca z-50'></aside>
          <WhatsAppButton fijo />
        </main>
        <Footer />
      </body>
    </html>
  );
}
