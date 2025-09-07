import Link from "next/link";
import Image from "next/image";
import estilo from './categoria.module.css';
import { CategoriaTipo } from "@/app/_lib/tipos";

const CategoriaBloque = ({ categoria, esGrande = false }: { categoria: CategoriaTipo, esGrande?: boolean }) => {
  return (
    <Link
      href={categoria.href}
      prefetch={false}
      className={`relative bg-white w-full h-[100vw] lg:h-[30vw] flex flex-col items-start justify-center ${esGrande ? 'md:col-span-5' : 'md:col-span-4'} group ${estilo.categoriaBloque}`}
    >
      <div className="relative w-full h-full">
        <Image
          src={categoria.imagenEscritorio}
          alt={categoria.titulo}
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover object-center"
          quality={85} // Optimización de calidad
          placeholder="blur" // Opcional: añadir blur placeholder
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//69NAMDA4MqxgFFALAQC/4vWZ0AAAAASUVORK5CYII=" // Base64 de baja calidad
        />
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-full pointer-events-none ${estilo.categoriaOverlay}`}
      ></div>
      <div className="absolute flex flex-col justify-center items-center gap-2 w-full bottom-16 px-2 md:px-8">
        <h2 className="text-white text-4xl md:text-5xl font-semibold">{categoria.titulo}</h2>
        <p className={`text-neutral-200 text-xl px-3 md:px-20 transition-all duration-300 ${estilo.categoriaDescripcion}`}>
          {categoria.descripcion}
        </p>
      </div>
      <div className="absolute bottom-0 flex gap-2 items-center justify-center text-white font-semibold text-lg h-24 w-full">
        <div className="bg-color-marca w-6 h-[1px]"></div>
        Dale click para ver más
        <div className="bg-color-marca w-6 h-[1px]"></div>
      </div>
    </Link>
  );
};

const ListaCategorias = ({ categorias }: { categorias: CategoriaTipo[] }) => {
  return (
    <section className="grid grid grid-cols-1 items-center md:grid-cols-9 gap-4 px-2 md:px-20 pb-20 md:pb-30 bg-color-fondo-gris">
      {
        categorias?.map((categoria, idx) => (
          <CategoriaBloque key={categoria.id} categoria={categoria} esGrande={[0, 3, 4, 7].includes(idx)} />
        ))
      }
    </section>
  );
};

export default ListaCategorias;
