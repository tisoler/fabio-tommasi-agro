import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Encabezado } from "./_componentes/Encabezado";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fabio Tommasi | Agro",
  description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
  metadataBase: new URL("https://fabiotommasi.com.ar"),
  openGraph: {
    title: "Fabio Tommasi | Agro",
    description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Tommasi | Agro",
    description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
    creator: "@tisoler",
    images: ["/opengraph-image.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  generator: "Next.js",
  applicationName: "fabioTommasiAgro",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Encabezado />
        {children}
      </body>
    </html>
  );
}
