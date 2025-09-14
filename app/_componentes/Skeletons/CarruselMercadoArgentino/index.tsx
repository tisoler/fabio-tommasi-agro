import React from "react"
import SkeletonItem from "../SkeletonItem";

export default function SkeletonCarruselMercadoArgentino() {
  return (
    <div className="relative flex w-full justify-center">
      <SkeletonItem className={`w-[90vw] md:w-[750px] h-[70px] mx-auto rounded-lg mb-5 absolute top-[-35px] z-40 !absolute`} />
    </div>
  );
}
