import Carrusel from "../Carrusel";
import ListaCategorias from "../CategoriaBloque";
import CarruselMercadoArgentino from "../CarruselPrecios";
import { obtenerCategorias, obtenerPrecios, obtenerUnidadesNovedades, obtenerUnidadesOportunidades } from "@/app/_lib/servicios";
import { Suspense } from "react";
import SubtituloDinamico from "../Subtitulo";
import CarruselUnidades from "../CarruselUnidades";
import PlacaVenta from "../PlacaVenta";

const ComponenteHome = async () => {
  const categorias = await obtenerCategorias();
  const precios = await obtenerPrecios();
  const preciosPlano = precios?.map(precio => precio.get({ plain: true })) || [];
  const unidadesOportunidades = await obtenerUnidadesOportunidades();
  const unidadesOportunidadesPlano = unidadesOportunidades?.map(unidad => unidad.get({ plain: true })) || [];
  const unidadesNovedades = await obtenerUnidadesNovedades();
  const unidadesNovedadesPlano = unidadesNovedades?.map(unidad => unidad.get({ plain: true })) || [];

  return (
    <section className="flex flex-col bg-white">
      <Suspense fallback={<div className="flex w-full h-[540px] md:h-[430px]">Carrusel</div>}>
        <Carrusel />
      </Suspense>
      <SubtituloDinamico />
      <Suspense fallback={<div className="text-center h-[90vw]">Cargando categorías...</div>}>
        <ListaCategorias categorias={categorias} />
      </Suspense>
      <Suspense fallback={<div className="text-center h-[70px]">Cargando precios...</div>}>
        <div className="bg-color-fondo-gris relative flex w-full justify-center">
          <CarruselMercadoArgentino precios={preciosPlano} className='absolute top-[-35px] z-40 bg-white' />
        </div>
      </Suspense>
      <Suspense fallback={<div className="text-center h-[90vw]">Cargando unidades...</div>}>
        <CarruselUnidades unidades={unidadesOportunidadesPlano} titulo='Oportunidades' />
      </Suspense>
      <PlacaVenta />
      <Suspense fallback={<div className="text-center h-[90vw]">Cargando unidades...</div>}>
        <CarruselUnidades unidades={unidadesNovedadesPlano} titulo='Novedades' />
      </Suspense>
    </section>
  );
}

export default ComponenteHome;
