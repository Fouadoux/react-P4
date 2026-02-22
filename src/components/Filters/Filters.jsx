"use client"
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'
import FilterTag from '@/components/FilterTag/FilterTag'
import { capitalize } from '@/utils/capitalize'

/**
 * Barre de filtres avec dropdowns et tags de sélection.
 * @param {Object[]} recipes - Liste des recettes pour extraire les options.
 * @param {string} selectedIngredient - Ingrédient sélectionné.
 * @param {Function} setSelectedIngredient - Setter de l'ingrédient.
 * @param {string} selectedAppliance - Appareil sélectionné.
 * @param {Function} setSelectedAppliance - Setter de l'appareil.
 * @param {string} selectedUstensil - Ustensile sélectionné.
 * @param {Function} setSelectedUstensil - Setter de l'ustensile.
 */
export default function Filters({
  recipes,
  selectedIngredient,
  setSelectedIngredient,
  selectedAppliance,
  setSelectedAppliance,
  selectedUstensil,
  setSelectedUstensil
}) {

  /** @type {string[]} Ingrédients uniques triés */
  const uniqueIngredients = [...new Set(
    recipes.flatMap(r => r.ingredients.map(ing => capitalize(ing.ingredient.trim())))
  )].sort()

  /** @type {string[]} Appareils uniques triés */
  const uniqueAppliances = [...new Set(
    recipes.map(r => capitalize(r.appliance.trim()))
  )].sort()

  /** @type {string[]} Ustensiles uniques triés */
  const uniqueUstensils = [...new Set(
    recipes.flatMap(r => r.ustensils.map(u => capitalize(u.trim())))
  )].sort()

  return (
    <div className='flex flex-row justify-between w-full max-w-360 mx-auto px-28 items-center'>
      <div>
        {/* Les 3 dropdowns de filtres */}
        <div className="flex gap-16.25">
          <FilterDropdown
            label="Ingrédients"
            options={uniqueIngredients}
            selected={selectedIngredient}
            onSelect={setSelectedIngredient}
          />
          <FilterDropdown
            label="Appareils"
            options={uniqueAppliances}
            selected={selectedAppliance}
            onSelect={setSelectedAppliance}
          />
          <FilterDropdown
            label="Ustensiles"
            options={uniqueUstensils}
            selected={selectedUstensil}
            onSelect={setSelectedUstensil}
          />
        </div>

        {/* Tags des filtres actifs - mt-4 seulement si un tag est affiché */}
        <div className={`flex gap-24.5 ${selectedIngredient || selectedAppliance || selectedUstensil ? 'mt-4' : 'mt-0'}`}>
          <div className="w-40.5">
            {selectedIngredient && (
              <FilterTag label={selectedIngredient} onRemove={() => setSelectedIngredient('')} />
            )}
          </div>
          <div className="w-40.5">
            {selectedAppliance && (
              <FilterTag label={selectedAppliance} onRemove={() => setSelectedAppliance('')} />
            )}
          </div>
          <div className="w-40.5">
            {selectedUstensil && (
              <FilterTag label={selectedUstensil} onRemove={() => setSelectedUstensil('')} />
            )}
          </div>
        </div>
      </div>

      {/* Compteur de recettes filtrées */}
      <div className='font-[anton] text-black flex justify-end text-[21px]'>
        <p>{recipes.length} recettes</p>
      </div>
    </div>
  )
}