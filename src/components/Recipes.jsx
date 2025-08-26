import { Link } from 'react-router-dom'

const Recipes = ({ id, image, name, rating }) => {

  return (
    <Link to={`/recipeDetail/${id}`} className='cursor-pointer'>
      <div className=' border shadow-lg rounded-lg'>
        <img className='mb-1 rounded-t-lg' src={image} alt={name} />
        <h1>{name}</h1>
        <p>{rating}</p>
      </div>
    </Link>
  )
}

export default Recipes
