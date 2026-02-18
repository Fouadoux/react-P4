import HeaderRecipe from '@/components/Header-recipe/HeaderRecipe';
import datas from '@/data/recipes.json'
import { notFound } from 'next/navigation'
import { use } from "react";
import Image from 'next/image'
import Footer from '@/components/Footer/Footer';
import { capitalize } from '@/utils/capitalize'

export default function RecipePage({ params }) {

  const { slug } = use(params)

  const recipe = datas.find(r => r.slug === slug)

  if (!recipe) {
    notFound()
  }

  return (

<div className="min-h-screen flex flex-col">
          <HeaderRecipe />
  <div className='flex-1 flex items-start justify-around pt-17.5 pb-17.5 pl-22.5 pr-22.5 gap-20.5'> 
             {/* Image de la recette */}
          <div className="relative w-151.5 h-184.5">
            <Image
              src={`/images/${recipe.image}`}
              alt={recipe.name}
              fill
              sizes="606px"
              className="object-cover rounded-[21px]"
            />
          </div>
          {/* Info de la recette */}
          <div className="flex flex-col items-start gap-8 w-143">

            {/* Titre */}
            <h1 className="font-[Anton] text-[26px] leading-9.75 text-black">
              {recipe.name}
            </h1>

            {/* Temps de préparation */}
            <div className="flex flex-col gap-2.5">
              <span className="font-[Manrope] font-bold text-[16px] tracking-[0.09em] uppercase text-[#7A7A7A]">
                Temps de préparation
              </span>
              <span className="font-[Manrope] text-[16px] bg-[#FFD15B] rounded-[14px] px-3.75 py-1.25 text-[#1B1B1B] w-19">
                {recipe.time}min
              </span>
            </div>

            {/* Ingrédients */}
            <div className="flex flex-col gap-2.5 w-full">
              <span className="font-[Manrope] font-bold text-[16px] tracking-[0.09em] uppercase text-[#7A7A7A]">
                Ingrédients
              </span>
              <div className="flex flex-row flex-wrap gap-7.5">
                {recipe.ingredients.map((ing, index) => (
                  <div key={index} className="flex flex-col w-37.5">
                    <span className="font-[Manrope] font-medium text-[16px] text-[#1B1B1B]">
                      {ing.ingredient}
                    </span>
                    <span className="font-[Manrope] font-normal text-[16px] text-[#7A7A7A]">
                      {ing.quantity} {ing.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ustensiles */}
            <div className="flex flex-col gap-2.5 w-full">
              <span className="font-[Manrope] font-bold text-[16px] tracking-[0.09em] uppercase text-[#7A7A7A]">
                Ustensiles nécessaires
              </span>
              <div className="flex flex-row flex-wrap gap-7.5">
                {recipe.ustensils.map((u, index) => (
                  <div key={index} className="flex flex-col w-37.5">
                    <span className="font-[Manrope] font-medium text-[16px] text-[#1B1B1B]">
                      {capitalize(u)}
                    </span>
                    <span className="font-[Manrope] font-normal text-[16px] text-[#7A7A7A]">
                      1
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Appareils */}
            <div className="flex flex-col gap-2.5 w-full">
              <span className="font-[Manrope] font-bold text-[16px] tracking-[0.09em] uppercase text-[#7A7A7A]">
                Appareils nécessaires
              </span>
              <div className="flex flex-row flex-wrap gap-7.5">
                <div className="flex flex-col w-37.5">
                  <span className="font-[Manrope] font-medium text-[16px] text-[#1B1B1B]">
                    {capitalize(recipe.appliance)}
                  </span>
                  <span className="font-[Manrope] font-normal text-[16px] text-[#7A7A7A]">
                      1
                    </span>
                </div>
              </div>
            </div>

            {/* Recette */}
            <div className="flex flex-col gap-2.5 w-149.25">
              <span className="font-[Manrope] font-bold text-[16px] tracking-[0.09em] uppercase text-[#7A7A7A]">
                Recette
              </span>
              <p className="font-[Manrope] font-normal text-[16px] leading-5.5 text-[#1B1B1B]">
                {recipe.description}
              </p>
            </div>

          </div>
        </div>
        <Footer />

    </div>
  )
}