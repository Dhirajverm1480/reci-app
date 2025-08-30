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
    <div className="w-full overflow-hidden">
      <Hero />
      <div className="page-frame">
        <div className="w-full flex flex-wrap justify-start gap-3">
          {recipe.map((reci) => (
            <div
              key={reci.id}
              className="w-full sm:w-[45%] md:w-[31%] lg:w-[32%] xl:w-[24%]"
            >
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
    </div>
  );
};

export default Home;
