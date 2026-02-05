"use client"
import { useEffect, useState } from 'react'
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'

export default function Filters({ recipes }) {
    const [selectedIngredient, setSelectedIngredient] = useState('')
const [selectedAppliance, setSelectedAppliance] = useState('')
const [selectedUstensil, setSelectedUstensil] = useState('')

const allIngredients = recipes
  .flatMap(r => r.ingredients.map(ing => ing.ingredient))

const ingredientsMap = new Map()
allIngredients.forEach(ing => {
  const key = ing.trim().toLowerCase()
  if (!ingredientsMap.has(key)) {
    ingredientsMap.set(key, ing.trim())
  }
})

const uniqueIngredients = Array.from(ingredientsMap.values())

const allAppliances = recipes.map(r => r.appliance)
const uniqueAppliances = [...new Set(allAppliances)]

const allUstensils = recipes.flatMap(r => r.ustensils)
const uniqueUstensils = [...new Set(allUstensils)]

const handleSelectIngredient = (ingredient) => {
  setSelectedIngredient(ingredient)  
}

const handleSelectAppliance = (appliance) => {
  setSelectedAppliance(appliance)
}

const handleSelectUstensil = (ustensil) => {
  setSelectedUstensil(ustensil)
}

return (
  <div className="flex gap-4">
    <FilterDropdown 
      label="Ingrédients"
      options={uniqueIngredients}
      selected={selectedIngredient}
      onSelect={handleSelectIngredient}
    />
    
    <FilterDropdown 
      label="Appareils"
      options={uniqueAppliances}
      selected={selectedAppliance}
      onSelect={handleSelectAppliance}
    />
    
    <FilterDropdown 
      label="Ustensiles"
      options={uniqueUstensils}
      selected={selectedUstensil}
      onSelect={handleSelectUstensil}
    />
  </div>
)
}