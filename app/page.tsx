import Card from "./components/card"
import CategoryDropdown from "./components/category-dropdown"
import GenerateQButton from "./components/generate-q-button"
import About from "./components/about"

import { getCategories } from "./plugins/sanity/queries"

export default async function Home() {
    const categories = [{ name: "All", _id: "all" }, ...(await getCategories())]
    return (
        <main>
            <div
                className="h-[100vh] w-full flex flex-col items-center justify-center mt-5"
                id="cards"
            >
                <Card />
                <div className="mt-10 w-full flex flex-col items-center">
                    <CategoryDropdown categories={categories} />
                    <GenerateQButton />
                </div>
            </div>
            <About />
        </main>
    )
}
