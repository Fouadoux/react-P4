"use client"
import { useState } from 'react'
import Header from '@/components/Header/Header'
import Filters from '@/components/Filters/Filters'
import RecipeList from '@/components/RecipeList/RecipeList'
import Footer from '@/components/Footer/Footer'
import datas from '@/data/recipes.json'

export default function Page() {

    // États des filtres (remontés depuis Filters)
    const [selectedIngredient, setSelectedIngredient] = useState('')
    const [selectedAppliance, setSelectedAppliance] = useState('')
    const [selectedUstensil, setSelectedUstensil] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    // Fonction de filtrage
    const filteredRecipes = datas.filter((recipe) => {
        // Filtre par recherche (SearchBar)
        const matchSearch = searchTerm === '' ||
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.some(ing =>
                ing.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
            )

        // Filtre par ingrédient
        const matchIngredient = selectedIngredient === '' ||
            recipe.ingredients.some(ing =>
                ing.ingredient.toLowerCase() === selectedIngredient.toLowerCase()
            )

        // Filtre par ustensile
        const matchUstensil = selectedUstensil === '' ||
            recipe.ustensils.some(u =>
                u.toLowerCase() === selectedUstensil.toLowerCase()
            )

        // Filtre par appareil
        const matchAppliance = selectedAppliance === '' ||
            recipe.appliance.toLowerCase() === selectedAppliance.toLowerCase()

        // Retourner true seulement si TOUS les filtres correspondent
        return matchSearch && matchIngredient && matchAppliance && matchUstensil
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