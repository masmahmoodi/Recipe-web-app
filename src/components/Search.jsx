import React from "react"
import RecipeCards from "./RecipeCards"
import Dummy from "./DummyCards"

export default function Search(props){
    
    const [getMeals,setMeals] = React.useState([])
    const [mealName,setMealName] = React.useState("")
    const [inputValue,setInputValue] = React.useState("")
    React.useEffect(()=>{
        if(inputValue){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
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
            <h2>Your desired dishes?</h2>
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
         {getMeals.length > 0 ? cardsArray :  <Dummy /> }
      </div>
     </>
    )
}