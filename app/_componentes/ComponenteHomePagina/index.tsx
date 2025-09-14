import { Suspense } from "react";
import dynamic from "next/dynamic";
import { obtenerCategorias, obtenerPrecios, obtenerUnidadesNovedades, obtenerUnidadesOportunidades } from "@/app/_lib/servicios";
import Carrusel from "../Carrusel";
import CarruselUnidades from "../CarruselUnidades";
import SkeletonCarrusel from "../Skeletons/Carrusel";
import SkeletonCarruselUnidades from "../Skeletons/CarruselUnidades";
import SkeletonListaCategorias from "../Skeletons/ListaCategorias";
import SkeletonCarruselMercadoArgentino from "../Skeletons/CarruselMercadoArgentino";

// Carga diferida del componente que no es crítico
const SubtituloDinamico = dynamic(() => import('../Subtitulo/subtitulo'));
const ListaCategorias = dynamic(() => import('../CategoriaBloque/categoriaBloque'));
const CarruselMercadoArgentino = dynamic(() => import('../CarruselPrecios/carruselPrecios'));
const PlacaVenta = dynamic(() => import('../PlacaVenta'));

const ComponenteHome = async () => {
  const [precios, categorias, unidadesOportunidades, unidadesNovedades] = await Promise.all([
    obtenerPrecios(),
    obtenerCategorias(),
    obtenerUnidadesOportunidades(),
    obtenerUnidadesNovedades(),
  ]);

  return (
    <section className="flex flex-col bg-white">
      <Suspense fallback={<SkeletonCarrusel />}>
        <Carrusel />
      </Suspense>
      <Suspense fallback={<SkeletonCarruselUnidades />}>
        <CarruselUnidades unidades={unidadesOportunidades} titulo='Oportunidades' priorizar />
      </Suspense>
      <SubtituloDinamico />
      <Suspense fallback={<SkeletonListaCategorias />}>
        <ListaCategorias categorias={categorias} />
      </Suspense>
      <Suspense fallback={<SkeletonCarruselMercadoArgentino />}>
        <div className="relative flex w-full justify-center">
          <CarruselMercadoArgentino precios={precios} />
        </div>
      </Suspense>
      <div className="mt-8 md:mt-0">
        <Suspense fallback={<SkeletonCarruselUnidades />}>
          <CarruselUnidades unidades={unidadesNovedades} titulo='Novedades' />
        </Suspense>
      </div>
      <PlacaVenta />
    </section>
  );
}

export default ComponenteHome;
