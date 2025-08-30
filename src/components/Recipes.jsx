import { Link } from 'react-router-dom'

const Recipes = ({ id, image, name, rating }) => {

  return (
    <Link to={`/recipeDetail/${id}`} className='cursor-pointer'>
      <div className='border rounded-lg overflow-hidden'>
        <img className='mb-1' src={image} alt={name} />
        <h1>{name}</h1>
        <p>{rating}</p>
      </div>
    </Link>
  )
}

export default Recipes
