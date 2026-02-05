import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import { anton } from '@/app/fonts'  

export default function Header() {



  return (
    <header className="relative w-[1440px] h-[667px] flex justify-center mx-auto">

      {/* Image de fond */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/header_image.png"
          alt="Image d'un plat asiatique en arrière-plan"
          fill
          priority  
          className="object-cover"
        />
      </div>

      {/* Logos/icônes */}
      <div className="absolute z-20 flex flex-row items-center gap-4 left-[69px] top-[51px]">
        <Image
          src="/icons/Les_petits_plats.png"
          alt="Logo Les petits plats"
          width={180.35}
          height={25.26}
          className="object-contain"
        />
        <Image
          src="/icons/icon_1.png"
          alt="Icône associée"
          width={22.05}
          height={21.25}
          className="object-contain"
        />
      </div>
      <div className="absolute z-20 flex flex-row items-center left-[275px] top-[245px] ">
        <p className={`${anton.className} text-center text-[44px] leading-[66px] text-[#FFD15B] font-bold`}>
          DÉCOUVREZ NOS RECETTES<br />
          DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
        </p>
      </div>
      <div className="absolute z-20 flex flex-row items-center gap-4 left-[243px] top-[406px] ">
        <SearchBar/>
        </div>
    </header>

  );
}