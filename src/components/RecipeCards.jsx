import React from "react"


export default function RecipeCards(props){
    // console.log(props)
    // console.log(props.meal.strMealThumb)
    return(
            <div className="one"  
                     style={{ backgroundImage: `url(${props.meal.strMealThumb})` }}
                     onClick={()=>props.handleClick(props.meal.idMeal)}  
                     data-aos="zoom-in-down"  >
           
                <span>{props.meal.strMeal}</span>
            </div>
    )
}