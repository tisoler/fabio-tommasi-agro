import { Suspense } from "react";
import Carrusel from "../Carrusel";
import SubtituloDinamico from "../Subtitulo";
import PlacaVenta from "../PlacaVenta";
import CarruselUnidades from "../CarruselUnidades";
import { obtenerCategorias, obtenerPrecios, obtenerUnidadesNovedades, obtenerUnidadesOportunidades } from "@/app/_lib/servicios";
import ListaCategorias from "../CategoriaBloque";
import CarruselMercadoArgentino from "../CarruselPrecios";

const ComponenteHome = async () => {
  const [precios, categorias, unidadesOportunidades, unidadesNovedades] = await Promise.all([
    obtenerPrecios(),
    obtenerCategorias(),
    obtenerUnidadesOportunidades(),
    obtenerUnidadesNovedades(),
  ]);

  return (
    <section className="flex flex-col bg-white">
      <Suspense fallback={<div className="flex w-full h-[540px] md:h-[430px]">Carrusel</div>}>
        <Carrusel />
      </Suspense>
      <Suspense fallback={<div className="text-center h-[90vw]">Cargando unidades...</div>}>
        <CarruselUnidades unidades={unidadesOportunidades} titulo='Oportunidades' priorizar />
      </Suspense>
      <SubtituloDinamico />
      <Suspense fallback={<div className="text-center h-[90vw]">Cargando categorías...</div>}>
        <ListaCategorias categorias={categorias} />
      </Suspense>
      <Suspense fallback={<div className="text-center h-[70px]">Cargando precios...</div>}>
        <div className="bg-color-fondo-gris relative flex w-full justify-center">
          <CarruselMercadoArgentino precios={precios} className='absolute top-[-35px] z-40 bg-white' />
        </div>
      </Suspense>
      <div className="mt-8 md:mt-0">
        <Suspense fallback={<div className="text-center h-[90vw]">Cargando unidades...</div>}>
          <CarruselUnidades unidades={unidadesNovedades} titulo='Novedades' />
        </Suspense>
      </div>
      <PlacaVenta />
    </section>
  );
}

export default ComponenteHome;
