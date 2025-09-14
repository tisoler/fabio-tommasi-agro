import { Metadata } from "next";

export const revalidate = 7200; // regenerar la página cada 1 hora y guardar en caché

export const metadata: Metadata = {
  alternates: {
    canonical: '/categoria',
  }
};

export default function PaginaCategoria() {
  return (
    <p>Pagina categoría</p>
  );
}
