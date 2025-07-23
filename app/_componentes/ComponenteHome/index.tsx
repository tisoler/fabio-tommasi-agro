import Link from "next/link";
import Carrusel from "../Carrusel";
import { titulo } from "../../_utiles/constants";

const ComponenteHome = () => {
  return (
    <section className="flex flex-col bg-white">
      <Carrusel />
      <div className="flex basis-1/2 flex-col items-center justify-start gap-12 px-4 py-20 md:items-start md:p-36">
        <h1 className="text-black text-center text-[32px]/[32px] tracking-tighter sm:text-[77px]/[79px] md:text-left">{titulo}</h1>
        <Link href="#" prefetch={false}>
          <button className="bg-color-marca font-semibold rounded-md border border-black px-10 py-[10px] text-[21px] md:py-[28px] md:text-[23px]">
            Usados seleccionados
          </button>
        </Link>
      </div>
      <div className='h-96' />
    </section>
  );
}

export default ComponenteHome;
