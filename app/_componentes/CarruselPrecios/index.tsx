'use client';
import Image from 'next/image';
import estilo from'./carrusel.module.css';
import { PrecioMercadoTipo } from '@/app/_lib/tipos';

export const revalidate = 3600; // regenerar la página cada 1 hora y guardar en caché

const ICONO: { [key: string]: string } = {
  dolarIcono: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/genericas/dolar.svg',
  sojaIcono: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/genericas/soja.svg',
  maizIcono: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/genericas/maiz.svg',
  trigoIcono: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/genericas/trigo.svg',
}

const CarruselMercadoArgentino = ({ precios, className }: { precios: PrecioMercadoTipo[], className?: string }) => {
  return (
    <div className={`w-[90vw] md:w-[750px] mx-auto overflow-hidden rounded-lg ${estilo.sliderContenedor} mb-5 ${className}`}>
      <div className={estilo.slider}>
        {
          <>
            {
              precios?.map((p, idx) => (
                <div key={idx} className={estilo.slide}>
                  <Image loading='lazy' className='mb-1' src={ICONO[p.icono] ?? ICONO.dolarIcono} height={30} width={30} alt='Ícono dólar'/>
                  <div className="flex flex-col items-start leading-5">
                    <span>${p.precio}</span>
                    <span className='font-bold'>{p.nombre}</span>
                  </div>
                </div>
              ))
            }
            {
              precios?.map((p, idx) => (
                <div key={`${idx}-bis`} className={estilo.slide}>
                  <Image loading='lazy' className='mb-1' src={ICONO[p.icono] ?? ICONO.dolarIcono} height={30} width={30} alt='Ícono dólar'/>
                  <div className="flex flex-col items-start leading-5">
                    <span>${p.precio}</span>
                    <span className='font-bold'>{p.nombre}</span>
                  </div>
                </div>
              ))
            }
          </>
        }
      </div>
    </div>
  );
};

export default CarruselMercadoArgentino;
