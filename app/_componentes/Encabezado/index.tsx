import Link from "next/link";
import Image from "next/image";
import { IconoLupa } from "../Iconos/Lupa";

export async function Encabezado() {
  return (
    <>
      <header className="hidden md:block w-full bg-color-marca sticky top-0 z-50">
        <div className="ml-10 flex items-center justify-between pl-4">
          <Link prefetch={false} href="/" className="flex items-center text-2xl text-slate-50">
            <div className="flex justify-center items-center mr-[0.4rem]">
              <Image width={27} height={27} alt="Fabio Tommasi Agro" src={"/logo.svg"} />
            </div>
            <h1>
              <span className="font-bold">
                Fabio Tommasi
              </span>
              <span>
                &nbsp;Agro
              </span>
            </h1>
          </Link>
          <div className="flex w-2/6 xl:w-[45%] bg-white rounded-sm px-3">
            <input type="text" placeholder="Buscar..." className="w-full bg-white rounded-sm text-black text-lg outline-none" />
            <button aria-label="Launch search modal" className="ml-3 flex items-center justify-center py-2">
              <IconoLupa color="#eb1923" />
            </button>
          </div>
          <div className="flex h-full justify-around items-center gap-4 bg-white pr-4 pl-10 py-1">
            <a href="https://pncremolques.com.ar" target="_blank">
              <Image width={384} height={122} className="h-[55px] w-auto" priority alt="PNC remolques" src={"https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/pnc-logo.png"} />
            </a>
            <a href="https://www.maquinasombu.com.ar/" target="_blank">
              <Image width={384} height={150} className="h-[55px] w-auto" priority alt="Maquinarias agrícolas y remolques Ombú" src={"https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/ombu-logo.png"} />
            </a>
          </div>
        </div>
      </header>
      <>
        <header className="block md:hidden w-full sticky top-0 z-50">
          <div className="flex w-full items-center justify-between pl-6 py-3 bg-color-marca">
            <Link prefetch={false} href="/" className="brand flex items-center text-xl text-white">
              <div className="flex justify-center items-center mr-[0.4rem]">
                <Image width={25} height={25} alt="Fabio Tommasi Agro" src={"/logo.svg"} />
              </div>
              <div className="flex flex-col pb-[3px]">
                <h1>
                  <span className="font-bold">
                    Fabio Tommasi
                  </span>
                  <span>
                    &nbsp;Agro
                  </span>
                </h1>
              </div>
            </Link>
            <div className="flex items-center">
              <button aria-label="Launch search modal" className="ml-3 flex items-center justify-center p-1">
                <IconoLupa />
              </button>
              <button className="burger" id="burger" aria-label="Abrir menu">
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex justify-around items-center bg-white py-1 md:hidden w-full">
          <a href="https://pncremolques.com.ar" target="_blank">
            <Image width={384} height={122} priority className="h-[53px] w-auto" alt="PNC remolques" src={"https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/pnc-logo.png"} />
          </a>
          <a href="https://www.maquinasombu.com.ar/" target="_blank">
            <Image width={384} height={150} priority className="h-[53px] w-auto" alt="Maquinarias agrícolas y remolques Ombú" src={"https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/agrotommasi/productos/ombu-logo.png"} />
          </a>
        </div>
      </>
    </>
  )
}
