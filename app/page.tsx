import { Metadata } from "next";
import ComponenteHome from "./_componentes/ComponenteHomePagina";

export const revalidate = 7200; // regenerar la página cada 2 horas y guardar en caché

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return (
    <ComponenteHome />
  );
}
