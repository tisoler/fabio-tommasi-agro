import './subtitulo.css';

const SubtituloDinamico= () => {
  return (
    <div
      className="
        relative flex items-center justify-center w-full text-[24px] xs:text-[28px] md:text-4xl lg:text-5xl font-bold text-black 
        pt-12 md:pt-20 pb-4 md:pb-8 bg-color-fondo-gris overflow-x-hidden tracking-tight [word-spacing:-3px] md:[word-spacing:-1px]
      "
    >
      <h2>
        Explore y encuentre su
      </h2>
      <div className="rotating-text tracking-tight [word-spacing:-3px] md:[word-spacing:-1px] ml-[5px] md:ml-[10px]">
        <span className="z-40">herramienta</span>
        <span>vehículo</span>
        <span>transporte</span>
      </div>
    </div>
  )
};

export default SubtituloDinamico;
