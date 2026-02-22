"use client"
import RecipeCard from '@/components/RecipeCard/RecipeCard'
import { useState, useEffect  } from "react"


 export default function RecipeList({ recipes }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isClient) return null
    const recipesPerPage = 9
    const lastIndex = currentPage * recipesPerPage
    const firstIndex = lastIndex - recipesPerPage

    const currentRecipes = recipes.slice(firstIndex, lastIndex)

    const totalPages = Math.ceil(recipes.length / recipesPerPage)

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
    return (
        <div className="w-full max-w-360 mx-auto bg-gray-[#EDEDED] px-18">
            <div className="grid grid-cols-3 gap-x-12 gap-y-17 justify-items-center">
                {currentRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>


            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="px-6 py-2 bg-[#FFD15B] rounded-lg font-[manrope] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ffd970] transition text-black"
                >
                    Précédent
                </button>

                <span className="font-[manrope] text-sm text-black">
                    Page {currentPage} sur {totalPages}
                </span>

                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 bg-[#FFD15B] rounded-lg font-[manrope] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ffd970] transition text-black"
                >
                    Suivant
                </button>
            </div>
        </div>
    );

}