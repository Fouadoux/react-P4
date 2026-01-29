import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import datas from '../data/recipes.json';
import RecipeList from "@/components/RecipeList/RecipeList";


export default function Page() {

    return (
        <>
            <Header />

            <RecipeList recipes={datas}/>

            <Footer />
        </>
    )
}