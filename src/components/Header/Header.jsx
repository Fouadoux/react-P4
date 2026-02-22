import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";

/**
 * Header principal de la page d'accueil.
 * @param {string} searchTerm - Terme de recherche actuel.
 * @param {Function} setSearchTerm - Setter du terme de recherche.
 */
export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full">
      <header className="relative max-w-360 h-166.75 flex justify-center mx-auto">

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

        {/* Logo et icône */}
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

        {/* Slogan */}
        <div className="absolute z-20 flex flex-row items-center justify-center top-61.25">
          <p className="font-[anton] text-center text-[44px] leading-16.5 text-[#FFD15B] font-bold">
            DÉCOUVREZ NOS RECETTES<br />
            DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="absolute z-20 flex flex-row items-center gap-4 left-60.75 top-101.5">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

      </header>
    </div>
  )
}