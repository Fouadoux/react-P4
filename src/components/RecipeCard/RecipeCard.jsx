import Image from 'next/image'
import Link from 'next/link'

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipe/${recipe.slug}`}>
      <div className="relative w-95 h-182.75 bg-white shadow-[0px_4px_34px_30px_rgba(0,0,0,0.04)] rounded-[21px]">

        {/* Image de la recette */}
        <div className="relative w-95 h-63.25">
          <Image
            src={`/images/${recipe.image}`}
            alt={recipe.name}
            fill
            sizes="380px"
            className="object-cover rounded-t-[21px]"
          />

          {/* Badge temps */}
          <div className="absolute top-5.25 right-5.5 w-15.75 h-6.5 bg-[#FFD15B] rounded-[14px] flex items-center justify-center">
            <span className="font-[manrope] text-xs text-[#1B1B1B] text-center">
              {recipe.time}min
            </span>
          </div>
        </div>

        {/* Titre de la recette */}
        <h3 className="font-[manrope] font-bold absolute left-6.25 top-71.25 font-anton text-lg leading-6.75 text-black">
          {recipe.name}
        </h3>

        {/* Container Frame 1 */}
        <div className="absolute left-6.25 top-85.25 w-82.5 flex flex-col gap-8">

          {/* Section RECETTE */}
          <div className="flex flex-col gap-2.5 w-82.5">
            <h4 className="font-[manrope] font-bold text-xs leading-4 tracking-[0.09em] uppercase text-[#7A7A7A]">
              Recette
            </h4>
            <p className="font-[manrope] text-sm leading-4.75 text-[#1B1B1B] w-82.5 line-clamp-4">
              {recipe.description}
            </p>
          </div>

          {/* Section INGRÉDIENTS */}
          <div className="flex flex-col gap-2.5 w-82.5">
            <h4 className="font-[manrope] font-bold text-xs leading-4 tracking-[0.09em] uppercase text-[#7A7A7A]">
              Ingrédients
            </h4>

            {/* Grille d'ingrédients (2 colonnes) */}
            <div className="grid grid-cols-2 gap-x-19.5 gap-y-5.25 mt-5.25">
              {recipe.ingredients.map((ing, index) => (
                <div key={index} className="flex flex-col">
                  {/* Nom de l'ingrédient */}
                  <span className="font-[manrope] font-medium text-sm leading-4.75 text-[#1B1B1B]">
                    {ing.ingredient}
                  </span>
                  {/* Quantité + unité */}
                  {(ing.quantity || ing.unit) && (
                    <span className="font-[manrope] text-sm leading-4.75 text-[#7A7A7A]">
                      {ing.quantity && `${ing.quantity}`}
                      {ing.unit && ` ${ing.unit}`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Link>
  )
}