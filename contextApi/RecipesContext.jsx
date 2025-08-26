import { createContext, useEffect, useState } from "react";

export const RecipesContext = createContext();

const RecipeContextProvider = (props) => {

    const [recipes, setRecipes] = useState([])
    
      const getRecipes = async () => {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json();
        // console.log("Data", data)
    
        if (data && data.recipes) {
          setRecipes(data.recipes);
        }
      }
    
      // console.log("Recipes : ", recipes)
    
      useEffect(() => {
        getRecipes()
      }, [])

    const value = {
        recipes,
    }

    return (
        <RecipesContext.Provider value={value}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipeContextProvider