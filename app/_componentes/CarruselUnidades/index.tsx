import React from "react";
import Image from "next/image";
import { UnidadTipo } from "@/app/_lib/tipos";
import CarruselUnidades from "./carruselUnidades";

const CarruselUnidadesContenedor = ({ unidades, titulo, priorizar = false }: { unidades: UnidadTipo[], titulo: string, priorizar?: boolean }) => {
  return (
    <div className="flex flex-col w-full py-12 md:py-20 px-2 md:px-20">
      <Image
        src={'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/genericas/logo-rojo.svg'}
        loading={`${priorizar ? 'eager' : 'lazy'}`}
        priority={priorizar}
        alt="Logo Fabio Tommasi Agro"
        width={25}
        height={25}
        className="ml-1"
      />
      <h2 className="text-[28px] lg:text-5xl font-bold text-black">
        {titulo}
      </h2>
      <CarruselUnidades unidades={unidades} priorizar={priorizar} />
    </div>
  );
}

export default CarruselUnidadesContenedor;
