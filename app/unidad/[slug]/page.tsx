import ComponenteUnidad from "@/app/_componentes/ComponenteUnidadPagina";
import { obtenerUnidadPorSlug } from "@/app/_lib/servicios";
import { Suspense } from "react";

export const revalidate = 7200; // regenerar la página cada 1 hora y guardar en caché

export default async function PaginaUnidad({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const unidad = await obtenerUnidadPorSlug(slug)();

  if (!unidad) {
    return <p>Unidad no encontrada</p>;
  }

  return (
    <Suspense fallback={<p>Cargando unidad...</p>}>
      <ComponenteUnidad unidad={unidad} />
    </Suspense>
  );
};
