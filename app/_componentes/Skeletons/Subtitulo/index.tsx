import React from "react"
import SkeletonItem from "../SkeletonItem";

export default function SkeletonSubtitulo() {
  return (
    <div className="relative flex items-center justify-center w-full pt-8 md:pt-20 pb-8 md:pb-12 bg-color-fondo-gris">
      <SkeletonItem className="h-[85px] md:h-[80px] w-[287px] md:w-[620px] rounded-2xl" />
    </div>
  );
}
