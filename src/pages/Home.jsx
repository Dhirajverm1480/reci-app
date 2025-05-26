import React, { useContext, useEffect, useState } from 'react'
import { RecipesContext } from '../contextApi/RecipesContext'
import Hero from '../components/Hero'
import Recipes from '../components/Recipes'

const Home = () => {

    const { recipes } = useContext(RecipesContext)
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        setRecipe(recipes)
    }, [recipes])

    return (
        <div>
            <main>
                <Hero />
                <div className='flex flex-wrap gap-3 justify-center'>
                    {
                        recipe.map((reci, index) => (
                            <Recipes key={index} id={reci.id} image={reci.image} name={reci.name} rating={reci.rating} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Home
