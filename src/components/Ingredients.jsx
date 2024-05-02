import React from "react";

export default function Ingredients(props) {
  const { data } = props

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`]
    const measure = data[`strMeasure${i}`]
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(` ${ingredient} (${measure})`)
    }
  }

  return (
    <div>
      <a href={data.strYoutube} target="_blank">
        <video controls>
          <source />
          Your browser does not support the video tag.
        </video>
      </a>
      <div className="about-ingredients">
        <h2>{data.strMeal}</h2>
        <div className="list-container">
          <h3>Ingredients</h3>
          <ol className="beautiful-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}    data-aos="zoom-in-up" >{ingredient}</li>
            ))}
          </ol>
        </div>
        <h3>Instruction</h3>
        <p>
          {data.strInstructions}
        </p>
      </div>
    </div>
  )
}
