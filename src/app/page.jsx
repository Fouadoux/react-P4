import datas from '@/data/recipes.json'
import RecipesPage from '@/components/RecipesPage/RecipesPage'

export default function Page() {

    return (
        <>
            <RecipesPage recipes={datas} />
        </>
    )
}