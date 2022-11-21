import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleMeal } from '../functions/connection'
import '../components/Meal.css'

const Meal = () => {

  const [meal, setMeals] = useState('')
  const params = useParams()

  useEffect(() =>{
    singleMeal(params.idMeal, setMeals);
  },[]);

  return (
    <>
    {meal !== null ?
    (
      <div className='meal'>
        <h1 className='title'>{meal.strMeal}</h1>
        <img className='image' src={meal.strMealThumb}></img>
        <div className='cardIngredients'>
          <p className='ingredientTitle'>Ingredientes</p>
            <p>{meal.strIngredient1}</p>
            <p>{meal.strIngredient2}</p>
            <p>{meal.strIngredient3}</p>
            <p>{meal.strIngredient4}</p>
            <p>{meal.strIngredient5}</p>
            <p>{meal.strIngredient6}</p>
            <p>{meal.strIngredient7}</p>
            <p>{meal.strIngredient8}</p>
            <p>{meal.strIngredient9}</p>
            <p>{meal.strIngredient10}</p>
            <p>{meal.strIngredient11}</p>
            <p>{meal.strIngredient12}</p>
            <p>{meal.strIngredient13}</p>
            <p>{meal.strIngredient14}</p>
            <p>{meal.strIngredient15}</p>
            <p>{meal.strIngredient16}</p>
            <p>{meal.strIngredient17}</p>
            <p>{meal.strIngredient18}</p>
            <p>{meal.strIngredient19}</p>
            <p>{meal.strIngredient20}</p>
        </div>
        
        <p className='instructions'>{meal.strInstructions}</p>
      </div>
    ):("No hay comida")

    }
    </>
  )
}

export default Meal
