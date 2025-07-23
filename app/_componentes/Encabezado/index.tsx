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
          <div className="flex h-full justify-around items-center gap-4 bg-white pr-4 pl-10 py-1">
            <a href="https://pncremolques.com.ar" target="_blank">
              <Image width={160} height={75} className="h-[55px] w-[145px]" alt="PNC remolques" src={"/pnc-logo.png"} />
            </a>
            <a href="https://www.maquinasombu.com.ar/" target="_blank">
              <Image width={160} height={75} className="h-[55px] w-[145px]" alt="Maquinarias agrícolas y remolques Ombú" src={"/ombu-logo.png"} />
            </a>
          </div>
        </div>
      </header>
      <>
        <header className="block md:hidden w-full sticky top-0 z-50">
          <div className="flex w-full items-center justify-between pl-6 py-3 bg-color-marca">
            <Link prefetch={false} href="/" className="brand flex items-center text-xl text-white">
              <div className="flex justify-center items-center mr-[0.4rem]">
                <Image className="w-[40px] h-[40px]" width={30} height={30} alt="Fabio Tommasi Agro" src={"/logo.svg"} />
              </div>
              <div className="flex flex-col pb-[3px]">
                <h1>
                  <span className="font-bold leading-[16px]">
                    Fabio Tommasi
                  </span>
                  <span className="leading-[16px]">
                    Agro
                  </span>
                </h1>
              </div>
            </Link>
            <div className="flex items-center">
              <button aria-label="Launch search modal" className="ml-3 flex items-center justify-center p-1">
                <IconoLupa className="size-6" />
              </button>
              <button className="burger" id="burger" aria-label="open menu" aria-controls="menu">
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex justify-around items-center bg-white py-1 md:hidden w-full">
          <a href="https://pncremolques.com.ar" target="_blank">
            <Image width={160} height={75} className="h-[52.5px] w-[134.6px]" alt="PNC remolques" src={"/pnc-logo.png"} />
          </a>
          <a href="https://www.maquinasombu.com.ar/" target="_blank">
            <Image width={160} height={75} className="h-[52.5px] w-[134.6px]" alt="Maquinarias agrícolas y remolques Ombú" src={"/ombu-logo.png"} />
          </a>
        </div>
      </>
    </>
  )
}
