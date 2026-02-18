"use client"
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'
import FilterTag from '@/components/FilterTag/FilterTag'
import { capitalize } from '@/utils/capitalize'

export default function Filters({
  recipes,
  selectedIngredient,
  setSelectedIngredient,
  selectedAppliance,
  setSelectedAppliance,
  selectedUstensil,
  setSelectedUstensil
}) {

  // Ingrédients
  const allIngredients = recipes.flatMap(r =>
    r.ingredients.map(ing => ing.ingredient.trim())
  )
  const uniqueIngredients = [...new Set(
    allIngredients.map(ing => capitalize(ing))
  )].sort()

  // Appareils
  const allAppliances = recipes.map(r => r.appliance.trim())
  const uniqueAppliances = [...new Set(
    allAppliances.map(app => capitalize(app))
  )].sort()

  // Ustensiles
  const allUstensils = recipes.flatMap(r =>
    r.ustensils.map(u => u.trim())
  )
  const uniqueUstensils = [...new Set(
    allUstensils.map(ust => capitalize(ust))
  )].sort()

  return (
    <div className="w-full max-w-360 mx-auto px-8 py-6">
      {/* Les 3 dropdowns */}
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

      {/* Afficher les tags */}
      <div className="flex gap-16.25 mt-4">
        {selectedIngredient && (
          <FilterTag
            label={selectedIngredient}
            onRemove={() => setSelectedIngredient('')}
          />
        )}

        {selectedAppliance && (
          <FilterTag
            label={selectedAppliance}
            onRemove={() => setSelectedAppliance('')}
          />
        )}

        {selectedUstensil && (
          <FilterTag
            label={selectedUstensil}
            onRemove={() => setSelectedUstensil('')}
          />
        )}
      </div>
    </div>
  )
}