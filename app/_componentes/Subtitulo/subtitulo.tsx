'use client';
import estilo from './subtitulo.module.css';

const SubtituloDinamico = () => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center justify-center w-full text-4xl lg:text-5xl 
        font-semibold text-black pt-8 md:pt-20 pb-8 md:pb-12 bg-color-fondo-gris overflow-x-hidden tracking-tight 
        [word-spacing:-3px] md:[word-spacing:-1px]`}
    >
      <h2>
        Explore y encuentre su
      </h2>
      <div className={`${estilo.rotatingText} tracking-tight ml-[5px] md:ml-[10px]`}>
        <span>herramienta</span>
        <span>vehículo</span>
        <span>transporte</span>
      </div>
    </div>
  )
};

export default SubtituloDinamico;
