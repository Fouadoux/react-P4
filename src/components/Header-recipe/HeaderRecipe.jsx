import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";

export default function HeaderRecipe() {
  return (
        <div className="w-full bg-black">

    <header className="relative w-360 h-32 flex justify-center mx-auto">
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
      <div className="absolute z-20 flex flex-row items-center gap-4 left-17.25 top-12.75">
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
    </header>
    </div>
  )
}