import React from "react"
import SkeletonItem from "../SkeletonItem";

export default function SkeletonCarrusel() {
  return (
    <div className="relative shrink-0 md:snap-start aspect-[4/5] md:aspect-auto md:h-[430px] w-full">
      <SkeletonItem className="w-full h-full" />
      <div className="h-[32px] w-[32px] rounded bg-gray-100 hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10" />
      <div className="h-[32px] w-[32px] rounded bg-gray-100 hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10" />
    </div>
  );
}
