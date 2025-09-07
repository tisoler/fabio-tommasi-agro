import { UnidadConMarcaCategoria } from "@/app/_lib/tipos";
import Image from "next/image";
import CarruselUnidades from "../CarruselUnidades";
import { obtenerUnidadesOportunidades } from "@/app/_lib/servicios";
import { Suspense } from "react";

export default async function ComponenteUnidad({ unidad }: { unidad: UnidadConMarcaCategoria }) {
  // Treaer unidades de la misma categoría
  const unidadesSimilares = await obtenerUnidadesOportunidades();

  return (
    <div className="flex flex-col bg-white">
      <article className="flex px-6 md:px-20 py-20 bg-color-fondo-gris">
        <div>
          <Image
            loading='eager'
            priority
            src={unidad.imagenDestacadaUrl}
            alt={unidad?.titulo || 'Unidad'}
            height={400}
            width={600}
            className="w-[600px] h-[400px] object-cover object-center"
            quality={85} // Optimización de calidad
            placeholder="blur" // Opcional: añadir blur placeholder
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
          />
        </div>
        <section className="flex flex-1 flex-col items-start text-black px-6">
          <p>{unidad?.categoria?.titulo}</p>
          <h1 className="text-black font-bold">{unidad?.titulo}</h1>
          <p>{unidad?.marca?.nombre}</p>
        </section>
      </article>
      <Suspense fallback={<div className="text-center h-[90vw]">Cargando unidades...</div>}>
        <CarruselUnidades unidades={unidadesSimilares} titulo='Unidades que te pueden interesar' />
      </Suspense>
    </div>
  );
};
