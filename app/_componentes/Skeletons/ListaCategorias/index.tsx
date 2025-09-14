import React from "react"
import SkeletonItem from "../SkeletonItem";

export default function SkeletonListaCategorias() {
  return (
    <div
      className='grid grid grid-cols-1 items-center md:grid-cols-9 gap-4 px-2 md:px-20 pb-20 md:pb-30 bg-color-fondo-gris'
    >
      {
        new Array(6).fill(true).map((_, idx) => (
          <SkeletonItem key={idx} className={`relative aspect-[4/5] md:aspect-auto md:h-[30vw] w-full ${[0, 3, 4, 7].includes(idx) ? 'md:col-span-5' : 'md:col-span-4'}`} />
        ))
      }
    </div>
  );
}
