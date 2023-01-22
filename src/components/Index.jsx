import React, { useState, useEffect } from 'react'
import {allMeals} from '../functions/connection'
import Form from 'react-bootstrap/Form';
import '../components/Index.css'

const Index = () => {

  const [meals, setMeals] = useState(null);
  const [mealsSearch, setMealsSearch] = useState('');
  const[explorer, setExplorer] = useState('');

  const handleChange= (e) =>{
    setExplorer(e.target.value)
  }

  const handleClick = (e) =>{
    e.preventDefault();
    filter(explorer);
  }

  const handleReset = (e) =>{
    e.preventDefault();
    setMeals(mealsSearch);
    setExplorer('');
  }

  const filter = (searchTerm) =>{
    var searchResult = mealsSearch.filter((meal)=>{
      if(meal.strMeal.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return meal;
      }
    });
    setMeals(searchResult);
  }

  useEffect(()=>{
    allMeals(setMeals);
    allMeals(setMealsSearch);
  }, []);

  return (
    <>
      <Form className='searchBar'>
        <input className='inputSearch' type='text' onChange={handleChange} value={explorer}></input>
        <button className='buttonSearch' onClick={handleClick}>Buscar</button>
        <button className='buttonReset' onClick={handleReset}>Reset</button>
      </Form>
      {meals !== null
      ? meals.map((meal)=>(
        <div className='mealCard' key={meal.idMeal}>
          <img  className='images' src={meal.strMealThumb}/>
          <div>
            <h3 className='cardTitle'>{meal.strMeal}</h3>
            <a className='cardButton' href={`/meal/${meal.idMeal}`}>Ver receta</a>
          </div>
        </div>
      )): "No hay comidas"}
    </>
  )
}

export default Index