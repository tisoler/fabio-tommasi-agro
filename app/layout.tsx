import type { Metadata } from 'next';
import { Afacad_Flux, Geist_Mono,  } from 'next/font/google';
import './globals.css';
import { Encabezado } from './_componentes/Encabezado';
import WhatsAppButton from './_componentes/WhatsApp';
import Footer from './_componentes/Footer/Footer';

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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Los estilos críticos para el viewport inicial */
          /* ENCABEZADO */
          .header {
            transition: transform 0.3s ease-in-out;
          }

          .header.hidden {
            transform: translateY(-100%);
          }

          .headerMobile {
            display: flex;
          }

          @media (min-width: 768px) {
            .headerMobile {
              display: none;
            }
          }

          .headerEscritorio {
            display: none;
          }

          @media (min-width: 768px) {
            .headerEscritorio {
              display: flex;
            }
          }

          .headerPlaceholder {
            transition: height 0.3s ease;
          }
          
          .burger {
            position: relative;
            display: flex;
            cursor: pointer;
            width: 25px;
            height: 20px;
            opacity: 0;
            visibility: hidden;
            background: transparent;
            align-items: center;
            margin: auto 15px;
          }

          @media (max-width: 767px) {
            .burger {
              opacity: 1;
              visibility: visible;
            }
          }

          .burger .burgerLine {
            position: absolute;
            display: block;
            left: 0;
            width: 100%;
            height: 2px;
            opacity: 1;
            border-radius: 15px;
            background: #fff;
          }

          .burger .burgerLine:nth-child(1) {
            top: 0px;
          }

          .burger .burgerLine:nth-child(2) {
            top: 8px;
            width: 70%;
          }

          .burger .burgerLine:nth-child(3) {
            top: 16px;
          }
        `}} />
      </head>
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
