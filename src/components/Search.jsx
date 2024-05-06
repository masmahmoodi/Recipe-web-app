import React from "react"
import RecipeCards from "./RecipeCards"

export default function Search(props){
    
    const [getMeals,setMeals] = React.useState([])
    const [mealName,setMealName] = React.useState("")
    const [inputValue,setInputValue] = React.useState("")

    function fetchingMeals(name){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }

    React.useEffect(()=>{
        if(inputValue){
           fetchingMeals(inputValue)
        }else{
            fetchingMeals("beef")
        }

    },[inputValue])
   
    function handleChange(event){
            setMealName(event.target.value)
    }
   
    function handleSubmit(event){
        event.preventDefault()
        setInputValue(mealName)
    }


    const cardsArray = getMeals.map(meal =>{
        return(
            < RecipeCards
              meal={meal} 
              handleClick={props.handleClick}
              key={meal.idMeal}/>
              
        )
    })
    return(
     <>
        <form onSubmit={handleSubmit}>
            <h2>Search for meals</h2>
            <input 
                   placeholder="Search recipe"
                   type="search" 
                   name="mealName"
                   id="search" 
                   onChange={handleChange}
                   value={mealName}
            />
            <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
        </form>
      <div className="cards">
         { cardsArray}
      </div>
     </>
    )
}