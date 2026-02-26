import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"

/**
 * Page 404 - Affichée quand une route n'existe pas.
 * Le header redirige vers l'accueil au clic.
 */
export default function NotFound() {
  return (
    <>
      <div className="w-full">
        {/* Lien vers l'accueil sur tout le header */}
        <Link href="/">
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

            {/* Message d'erreur 404 */}
            <div className="absolute z-20 flex flex-col items-center justify-center top-61.25">
              <p className="font-[anton] text-center text-[70px] leading-16.5 text-[#FFD15B]">
                404 :(
              </p>
              <p className="font-[anton] text-center text-[40px] leading-16.5 text-white mt-4">
                La page que vous demandez est introuvable.
              </p>
            </div>

          </header>
        </Link>
      </div>
      <Footer />
    </>
  )
}