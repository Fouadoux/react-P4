"use client"
import { useState } from 'react'
import Header from '@/components/Header/Header'
import Filters from '@/components/Filters/Filters'
import RecipeList from '@/components/RecipeList/RecipeList'
import Footer from '@/components/Footer/Footer'

export default function RecipesPage({ recipes }) {
  // États des filtres
  const [selectedIngredient, setSelectedIngredient] = useState('')
  const [selectedAppliance, setSelectedAppliance] = useState('')
  const [selectedUstensil, setSelectedUstensil] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Fonction de filtrage
 const filteredRecipes = recipes.filter((recipe) => {
  // 1. Filtre par recherche (le plus restrictif en premier)
  if (searchTerm.length>2) {
    const matchSearch = 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ing =>
        ing.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    
    if (!matchSearch) return false  
  }

  // 2. Filtre par ingrédient
  if (selectedIngredient !== '') {
    const matchIngredient = recipe.ingredients.some(ing =>
      ing.ingredient.toLowerCase() === selectedIngredient.toLowerCase()
    )
    
    if (!matchIngredient) return false  
  }

  // 3. Filtre par appareil
  if (selectedAppliance !== '') {
    const matchAppliance = 
      recipe.appliance.toLowerCase() === selectedAppliance.toLowerCase()
    
    if (!matchAppliance) return false  
  }

  // 4. Filtre par ustensile
  if (selectedUstensil !== '') {
    const matchUstensil = recipe.ustensils.some(u =>
      u.toLowerCase() === selectedUstensil.toLowerCase()
    )
    
    if (!matchUstensil) return false  
  }

  // Si on arrive ici, tous les filtres sont passés
  return true
})

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Filters
        recipes={filteredRecipes}
        selectedIngredient={selectedIngredient}
        setSelectedIngredient={setSelectedIngredient}
        selectedAppliance={selectedAppliance}
        setSelectedAppliance={setSelectedAppliance}
        selectedUstensil={selectedUstensil}
        setSelectedUstensil={setSelectedUstensil}
      />
      
      <RecipeList recipes={filteredRecipes} />
      
      <Footer />
    </>
  )
}