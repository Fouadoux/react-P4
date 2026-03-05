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
  selectedIngredients,
  setSelectedIngredients,
  selectedAppliances,
  setSelectedAppliances,
  selectedUstensils,
  setSelectedUstensils
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

  const addTag = (setter, current, value) => {
    if (!current.includes(value)) setter([...current, value])
  }

  /**
   * Retire un tag de la liste.
   * @param {Function} setter
   * @param {string[]} current
   * @param {string} value
   */
  const removeTag = (setter, current, value) => {
    setter(current.filter(tag => tag !== value))
  }

  const hasActiveTags = selectedIngredients.length > 0 || selectedAppliances.length > 0 || selectedUstensils.length > 0

  return (
    <div className='flex flex-row justify-between w-full max-w-360 mx-auto px-28 items-center'>
      <div>
        {/* Les 3 dropdowns de filtres */}
        <div className="flex gap-16.25">
          <FilterDropdown
            label="Ingrédients"
            options={uniqueIngredients}
            selected={selectedIngredients}
            onSelect={(value, isRemove) =>
              isRemove
                ? removeTag(setSelectedIngredients, selectedIngredients, value)
                : addTag(setSelectedIngredients, selectedIngredients, value)
            } />
          <FilterDropdown
            label="Appareils"
            options={uniqueAppliances}
            selected={selectedAppliances}
            onSelect={(value, isRemove) =>
              isRemove
                ? removeTag(setSelectedAppliances, selectedAppliances, value)
                : addTag(setSelectedAppliances, selectedAppliances, value)
            }
          />
          <FilterDropdown
            label="Ustensiles"
            options={uniqueUstensils}
            selected={selectedUstensils}
            onSelect={(value, isRemove) =>
              isRemove
                ? removeTag(setSelectedUstensils, selectedUstensils, value)
                : addTag(setSelectedUstensils, selectedUstensils, value)
            } />
        </div>

        {/* Tags des filtres actifs - mt-4 seulement si un tag est affiché */}
        <div className={`flex gap-x-16.25 gap-y-2 flex-wrap ${hasActiveTags ? 'mt-4' : 'mt-0'}`}>
          {[
            ...selectedIngredients.map(tag => ({ tag, setter: setSelectedIngredients, list: selectedIngredients })),
            ...selectedAppliances.map(tag => ({ tag, setter: setSelectedAppliances, list: selectedAppliances })),
            ...selectedUstensils.map(tag => ({ tag, setter: setSelectedUstensils, list: selectedUstensils })),
          ].map(({ tag, setter, list }) => (
            <FilterTag
              key={tag}
              label={tag}
              onRemove={() => removeTag(setter, list, tag)}
            />
          ))}
        </div>
      </div>

      {/* Compteur de recettes filtrées */}
      <div className='font-[anton] text-black flex justify-end text-[21px]'>
        <p>{recipes.length} recettes</p>
      </div>
    </div>
  )
}