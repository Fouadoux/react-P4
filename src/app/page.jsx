import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import datas from '../data/recipes.json';
import RecipeList from "@/components/RecipeList/RecipeList";
import Filters from "@/components/Filters/Filters";


export default function Page() {

    return (
        <>
            <Header />
           <Filters recipes={datas} />
            <RecipeList recipes={datas} />

            <Footer />
        </>
    )
}