import React from "react";

export default function RecipeCards(props) {
    const handleClick = () => {
    const ingredientsInfoElement = document.querySelector(".ingredients-info");
    if (ingredientsInfoElement) {
      ingredientsInfoElement.scrollIntoView({ behavior: "smooth" });
    }
    props.handleClick(props.meal.idMeal);
  }

  return (
    <div
      className="one"
      style={{ backgroundImage: `url(${props.meal.strMealThumb})` }}
      onClick={handleClick}
      data-aos="zoom-in-down"
    >
      <span>{props.meal.strMeal}</span>
    </div>
  )
}
