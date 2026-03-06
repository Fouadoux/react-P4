"use client"
import { useState } from 'react'
import Header from '@/components/Header/Header'
import Filters from '@/components/Filters/Filters'
import RecipeList from '@/components/RecipeList/RecipeList'
import Footer from '@/components/Footer/Footer'

/**
 * Page principale regroupant header, filtres et liste des recettes.
 * @param {Object[]} recipes - Liste complète des recettes.
 */
export default function RecipesPage({ recipes }) {

  /** États des filtres actifs */
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [selectedAppliances, setSelectedAppliances] = useState([])
  const [selectedUstensils, setSelectedUstensils] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  /**
   * Filtre les recettes selon le terme de recherche et les filtres sélectionnés.
   * Utilise des retours anticipés pour optimiser les performances.
   * @type {Object[]}
   */
  const filteredRecipes = recipes.filter((recipe) => {
    // 1. Filtre par recherche (le plus restrictif en premier)
    if (searchTerm.length > 2) {
      const matchSearch =
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing =>
          ing.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      if (!matchSearch) return false
    }
    // 2. Filtre par ingrédient
    if (selectedIngredients.length > 0) {
      const matchIngredient = selectedIngredients.every(tag => 
        recipe.ingredients.some(ing =>
          ing.ingredient.toLowerCase() === tag.toLowerCase()
        )
      )
      if (!matchIngredient) return false
    }
    // 3. Filtre par appareil
    if (selectedAppliances.length > 0) {
      const matchAppliance = selectedAppliances.every(tag =>
        recipe.appliance.toLowerCase() === tag.toLowerCase())
      if (!matchAppliance) return false
    }
    // 4. Filtre par ustensile
    if (selectedUstensils.length > 0) {
      const matchUstensil = selectedUstensils.every(tag =>
        recipe.ustensils.some(u =>
          u.toLowerCase() === tag.toLowerCase()
        ))
      if (!matchUstensil) return false
    }
    return true
  })

  return (
    <>
      <div className='min-h-screen flex flex-col gap-15'>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          recipes={filteredRecipes}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
          selectedAppliances={selectedAppliances}
          setSelectedAppliances={setSelectedAppliances}
          selectedUstensils={selectedUstensils}
          setSelectedUstensils={setSelectedUstensils}
        />
        <RecipeList recipes={filteredRecipes} />
        <Footer />
      </div>
    </>
  )
}