import datas from '@/data/recipes.json'
import RecipesPage from '@/components/RecipesPage/RecipesPage'

/**
 * Page d'accueil - Charge toutes les recettes et les passe à RecipesPage.
 */
export default function Page() {
    return (
        <>
            <RecipesPage recipes={datas} />
        </>
    )
}