import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../contextApi/RecipesContext";
import Hero from "../components/Hero";
import Recipes from "../components/Recipes";

const Home = () => {
  const { recipes } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(recipes);
  }, [recipes]);

  return (
    <div className="">
      <Hero />
      
      <div className="page-frame flex flex-wrap gap-3 justify-center">
        {recipe.map((reci) => (
          <div key={reci.id} className="w-full md:w-[45%] lg:w-[30%]">
            <Recipes
            id={reci.id}
            image={reci.image}
            name={reci.name}
            rating={reci.rating}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
