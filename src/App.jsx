import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Search from "./components/Search"
import Ingredients  from "./components/Ingredients"
import DummyIngredients from "./components/DummyIngredients"
export default function App(){
  const [getId,setId] = React.useState(null)
  const [ingredientsInfo,setIngredientsInfo] = React.useState([])
  function handleClick(id) {
    setId(id);
  }

  React.useEffect(() => {
    if (getId) {
      console.log(getId)
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getId}`)
      .then(res => res.json())
      .then(data => setIngredientsInfo(data.meals[0]))
    }
  }, [getId])

    return(
     <>
         <Header />
         <main>
           <Hero />
           <section className="search-and-ingredients">
                <div className="meals">
                  <Search  handleClick={handleClick}/>
                </div>
                <div className="ingredients-info">
                  {ingredientsInfo && Object.keys(ingredientsInfo).length > 0 ? <Ingredients data={ingredientsInfo} />:  <DummyIngredients /> }
                </div>
           </section>
         </main>

     </>

    )
}