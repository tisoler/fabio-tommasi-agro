'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InferAttributes } from "sequelize";
import { Unidad } from "@/app/_modelos/unidad";
import { Marca } from "@/app/_modelos/marca";
import { NUEVO, USADO } from "@/app/_lib/constantes";
import Logo from '../../../public/logo-rojo.svg';
import './unidades.css';
import BotonIzquierda from "../BotonIzquierda";
import BotonDerecha from "../BotonDerecha";

const UnidadTarjeta = (
  { unidad }:
  { unidad: InferAttributes<Unidad, { omit: never; }> & { marca?: InferAttributes<Marca, { omit: never; }> } }
) => {
  return (
    <Link
      href={`/unidad/${unidad.id}`}
      key={unidad.id}
      className="flex flex-col w-[250px] md:w-[280px] rounded-md group"
    >
      <div className="relative w-[250px] md:w-[280px] h-[220px] md:h-[250px]">
        <Image
          src={unidad.imagenDestacadaUrl}
          alt={unidad.imagenDestacadaTextoAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-auto h-full object-cover object-center rounded-t-md"
          quality={85} // Optimización de calidad
          placeholder="blur" // Opcional: añadir blur placeholder
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
        />
      </div>
      <h2
        className="
          flex items-center justify-center text-center text-neutral-800 py-3 text-xl leading-6 min-h-[72px]
          capitalize break-words px-2 py-3 line-clamp-2 border-x-1 border-x-neutral-200
        "
      >
        {unidad.titulo?.toLowerCase()}
      </h2>
      <div className="flex h-[64px] text-gray-600 border-x-1 border-x-neutral-200 border-t-1 border-t-neutral-200">
        <div className={`flex justify-center items-center w-full h-full text-lg text-neutral-900 bg-white`}>
          {unidad.nuevo ? NUEVO : USADO}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full text-center text-neutral-700 border-x-1 border-x-neutral-200">
          <span>Modelo</span>
          <span>{unidad.modelo || ''}</span>
        </div>
        <div className="flex justify-center items-center w-full h-full text-center text-neutral-700">
          {unidad.marca?.nombre || ''}
        </div>
      </div>
      <div className="flex justify-center items-center bg-color-marca md:bg-[#211e1e] group-hover:bg-color-marca text-white rounded-b-md py-2 text-xl md:text-lg font-bold md:font-semibold">Ver más</div>
    </Link>
  );
};

const CarruselUnidades = ({ unidades, titulo }: { unidades: InferAttributes<Unidad, { omit: never; }>[], titulo: string }) => {
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const carruselRef = React.useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!carruselRef.current) return;
    setStartX(e.touches[0].clientX);
    setScrollLeft(carruselRef.current.scrollLeft);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!carruselRef.current) return;
    const endX = e.changedTouches[0].clientX;
    const walk = endX - startX; // Calcular el desplazamiento
    carruselRef.current.scrollLeft = scrollLeft - walk; // Aplicar el desplazamiento
  };

  const handlePrev = () => {
    if (!carruselRef.current) return;
    carruselRef.current.scrollBy({
      left: -carruselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    if (!carruselRef.current) return;
    carruselRef.current.scrollBy({
      left: carruselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col w-full py-20 md:py-[115px] px-2 md:px-20">
      <Image src={Logo} alt="Logo Fabio Tommasi Agro" width={25} height={25} className="ml-1" />
      <h2 className="text-[28px] lg:text-5xl font-bold text-black">
        {titulo}
      </h2>
      <div className="flex items-center relative w-full overflow-hidden pt-6">
        <div className="hidden md:flex"><BotonIzquierda onClick={handlePrev} /></div>
        <div
          id="carrusel-unidades"
          className="flex gap-4 overflow-x-auto md:mx-1 webkit-scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={carruselRef}
        >
          {unidades.map((unidad) => <UnidadTarjeta key={unidad.id} unidad={unidad} />)}
        </div>
        <div className="hidden md:flex"><BotonDerecha onClick={handleNext} /></div>
      </div>
    </div>
  );
}

export default CarruselUnidades;
