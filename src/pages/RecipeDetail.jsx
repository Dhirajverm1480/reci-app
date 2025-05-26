import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipesContext } from '../contextApi/RecipesContext';
import SuggestionItem from '../components/SuggestionItem';

const RecipeDetail = () => {

  const { recipeId } = useParams();
  const { recipes } = useContext(RecipesContext)
  const [recipeData, setRecipeData] = useState(false);

  const fetchRecipeDetail = async () => {
    recipes.map((item) => {
      if (item.id == recipeId) {
        setRecipeData(item);
        console.log("item: ", item)
        return null;
      }
    })
  }

  useEffect(() => {
    fetchRecipeDetail()
  }, [])

  return recipeData ? (
    <div className='mb-2'>
      <div className=' flex flex-col sm:flex-row mb-2'>
        <div className='w-full sm:w-96   border-r-2 p-2'>
          <div className='w-full'>
            <img src={recipeData.image} alt={recipeData.name} className='rounded-lg shadow-lg' />
          </div>
          <p className='text-3xl border-2 rounded-lg shadow-md my-3 p-3 cursor-pointer'>{recipeData.name}</p>
        </div>
        {/* Right Side */}
        <div>
          <h1 className='hidden sm:block text-2xl text-orange-400 border-b-2 ml-3 mt-3 mb-4'>{recipeData.name}</h1>
          <div className='flex flex-col pl-3 gap-2'>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>Rating</span>{recipeData.rating}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>ReviewCount</span>{recipeData.reviewCount}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>CaloriesPerServing</span>{recipeData.caloriesPerServing}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>CookTimeMinutes</span>{recipeData.cookTimeMinutes}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>Cuisine</span>{recipeData.cuisine}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>Difficulty</span>{recipeData.difficulty}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>MealType</span>{recipeData.mealType}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>PerpTimeMinutes</span>{recipeData.prepTimeMinutes}</p>
            <p className='text-md text-xl'><span className='text-orange-400 mr-4'>Serving</span>{recipeData.servings}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-2 ml-3 mb-4'>
        <h2 className='text-xl border-b-2 mb-3 inline w-48'>Ingredients</h2>
        {
          recipeData.ingredients.map((ingrd, index) => (
            <p key={index}> {ingrd}</p>
          ))
        }
      </div>
      <hr />
      <div className='px-2 mb-3'>
        <h2 className='text-2xl pl-3 mb-3'>Instruction</h2>
        {
          recipeData.instructions.map((inst, index) => {
            return(
              <p className='border-b-2 border-fuchsia-500 mb-2 text-lg' key={index}> <span className='bg-orange-400'>Step {index + 1}</span> {inst}</p>
            )
          })
        }
      </div>
      <hr />
      <SuggestionItem/>
    </div>
  ) : <div> 404 not found</div>
}

export default RecipeDetail
