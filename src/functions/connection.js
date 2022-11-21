import axios from 'axios'

const allMeals = async(state) => {
    const peticion = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
    
    state(peticion.data.meals)
}

const singleMeal = async (idMeal, state) =>{
    const peticion = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    state(peticion.data.meals[0])
}

export{
    allMeals,
    singleMeal
}