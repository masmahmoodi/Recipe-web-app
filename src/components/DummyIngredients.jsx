import React  from "react"
import videoMP4 from "../assets/images/Journal.mp4"

export default function DummyIngredients(){
    return(
        <div>
        <video controls >
            <source src={videoMP4} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="about-ingredients">
             <h2>Lamb Tzatziki Burgers</h2>
             <div class="list-container">
                <h3>Ingredients</h3>
                <ol class="beautiful-list">
                <li data-aos="zoom-in-up">Item 1(2/3 cup)</li>
                <li data-aos="zoom-in-up">Item 2</li>
                <li data-aos="zoom-in-up">Item 3</li>
                <li data-aos="zoom-in-up">Item 4</li>
                <li data-aos="zoom-in-up">Item 5</li>
                </ol>
            </div>
            <h3>Instruction</h3>
            <p>
            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
            </p>
        </div>
    </div>
    )
}