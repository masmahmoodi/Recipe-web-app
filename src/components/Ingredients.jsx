import React from "react";
import YouTube from "react-youtube";

export default function Ingredients(props) {
  const { data } = props;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(` ${ingredient} (${measure})`);
    }
  }

  // Extract video ID from the YouTube URL
  const videoId = data.strYoutube.split("v=")[1];

  return (
    <div>
      <div className="video-container">
        <YouTube videoId={videoId} className="youtube-video" />
      </div>
      <div className="about-ingredients">
        <h2>{data.strMeal}</h2>
        <div className="list-container">
          <h3>Ingredients</h3>
          <ol className="beautiful-list">
            {ingredients.map((ingredient, index) => (
              <li key={index} data-aos="zoom-in-up">
                {ingredient}
              </li>
            ))}
          </ol>
        </div>
        <h3>Instruction</h3>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  )
}
