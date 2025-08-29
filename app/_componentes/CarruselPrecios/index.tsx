'use client';
import Image from 'next/image';
import DolarIcono from '@/public/dolar.svg';
import SojaIcono from '@/public/soja.svg';
import MaizIcono from '@/public/maiz.svg';
import TrigoIcono from '@/public/trigo.svg';
import './carrusel.css';
import { PrecioMercado } from '@/app/_modelos/precio';
import { InferAttributes } from 'sequelize';

const obtenerIcono = (icono: string) => {
  switch (icono) {
    case 'dolarIcono':
      return DolarIcono;
    case 'sojaIcono':
      return SojaIcono;
    case 'maizIcono':
      return MaizIcono;
    case 'trigoIcono':
      return TrigoIcono;
    default:
      return DolarIcono;
  }
}

const CarruselMercadoArgentino = ({ precios, className }: { precios: InferAttributes<PrecioMercado, { omit: never; }>[], className?: string }) => {
  return (
    <div className={`w-[90vw] md:w-[750px] mx-auto overflow-hidden rounded-lg slider-contenedor mb-5 ${className}`}>
      <div className="slider">
        {
          <>
            {
              precios?.map((p, idx) => (
                <div key={idx} className='slide'>
                  <Image className='mb-1' src={obtenerIcono(p.icono)} height={30} width={30} alt='Ícono dólar'/>
                  <div className="flex flex-col items-start leading-5">
                    <span>${p.precio}</span>
                    <span className='font-bold'>{p.nombre}</span>
                  </div>
                </div>
              ))
            }
            {
              precios?.map((p, idx) => (
                <div key={`${idx}-bis`} className='slide'>
                  <Image className='mb-1' src={obtenerIcono(p.icono)} height={30} width={30} alt='Ícono dólar'/>
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
