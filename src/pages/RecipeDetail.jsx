import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../contextApi/RecipesContext";
import Title from "../components/Title";
import Recipes from "../components/Recipes";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { recipes } = useContext(RecipesContext);
  const [recipeData, setRecipeData] = useState(false);
  const [filterRecipe, setFilterRecipe] = useState([]);

  const fetchRecipeDetail = async () => {
    const item = recipes.find((item) => item.id === parseInt(recipeId));
    if (item) {
      setRecipeData(item);
      // console.log(item)
    }
  };

  const filterItems = (mealItem) => {
    const filterItem = recipes.filter((item) =>
      item.mealType.includes(`${mealItem[0]}`) && item.id !== parseInt(recipeId)
    );
    setFilterRecipe(filterItem);
    // console.log("MealFil:",filterItem)
  };

  useEffect(() => {
    fetchRecipeDetail();
    // filterItems();
  }, [recipes, recipeId]);

  useEffect(() => {
    if (recipeData) {
      const mealItem = recipeData.mealType;
      filterItems(mealItem);
    }
  }, [recipeData]);

  // console.log("Meal: ",mealItem)

  // console.log(filterRecipe);

  return recipeData ? (
    <div className="page-frame">
      <div className="w-full md:flex justify-between pt-16 pb-4">
        <div className="w-full sm:w-[40%]">
          <img
            src={recipeData.image}
            alt={recipeData.name}
            className="w-full rounded-lg shadow-lg"
          />
          {/* <p className='text-3xl border-2 rounded-lg shadow-md my-3 p-3 cursor-pointer'>{recipeData.name}</p> */}
        </div>
        {/* Right Side */}
        <div className="w-full sm:w-[50%]">
          <Title title={recipeData.name} />
          <div className="flex flex-col gap-2">
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">Rating</span>
              {recipeData.rating}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">ReviewCount</span>
              {recipeData.reviewCount}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">CaloriesPerServing</span>
              {recipeData.caloriesPerServing}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">CookTimeMinutes</span>
              {recipeData.cookTimeMinutes}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">Cuisine</span>
              {recipeData.cuisine}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">Difficulty</span>
              {recipeData.difficulty}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">MealType</span>
              {recipeData.mealType}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">PerpTimeMinutes</span>
              {recipeData.prepTimeMinutes}
            </p>
            <p className="text-md text-xl">
              <span className="text-orange-400 mr-4">Serving</span>
              {recipeData.servings}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-2">
        <h2 className="text-2xl text-gray-400">Ingredients</h2>
        {recipeData.ingredients.map((ingrd, index) => (
          <p key={index} className="text-md">
            {index + 1} {ingrd},
          </p>
        ))}
      </div>
      <hr />
      <div className="py-2">
        <h2 className="text-2xl text-gray-400 mb-3">Instruction</h2>
        {recipeData.instructions.map((inst, index) => {
          return (
            <p className="border-b-2 border-gray-500 mb-2 text-lg" key={index}>
              {" "}
              <span className="bg-orange-400">Step {index + 1}</span> {inst}
            </p>
          );
        })}
      </div>
      <div className="w-full">
        <Title title={"Related Product"} />
        <div className="w-full flex flex-wrap gap-3 justify-start py-4">
          {filterRecipe.map((item) => (
            <div key={item.id} className="w-full md:w-[45%] lg:w-[32%] xl:w-[24%]">
              <Recipes
                id={item.id}
                image={item.image}
                name={item.name}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex-center">Loading...</div>
  );
};

export default RecipeDetail;
