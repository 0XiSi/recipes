import { useState, useEffect } from "react";
import api from "../api";
import Recipe from "../components/Recipe.jsx"
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = () => {
    api.get('/api/recipes/')
      .then(res => res.data)
      .then(data => {setRecipes(data.results); console.log(data)})
      .catch((err) => alert(err))
  }

  return(
    <div>
      <div>
        <h2>Recipes</h2>
        {recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
      </div>
      <input onClick={() => navigate("/create_recipe")} value="Create recipe" type="button"/>
      {/*<form onSubmit={createRecipe}>*/}
      {/*  <label htmlFor='title'>Title: </label> <br/>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    id='title'*/}
      {/*    name='title'*/}
      {/*    required*/}
      {/*    onChange={(e) => setTitle(e.target.value)}*/}
      {/*    value={title}*/}
      {/*  />*/}
      {/*  <label htmlFor='description'>Description: </label> <br/>*/}
      {/*  <textarea*/}
      {/*    id='description'*/}
      {/*    name='description'*/}
      {/*    required*/}
      {/*    onChange={(e) => {setDescription(e.target.value)}}*/}
      {/*    value={description}*/}
      {/*  />*/}
      {/*  <label htmlFor='description'>Ingredients: </label> <br/>*/}
      {/*  <textarea*/}
      {/*    id='ingredients'*/}
      {/*    name='ingredients'*/}
      {/*    required*/}
      {/*    onChange={(e) => {setIngredients(e.target.value)}}*/}
      {/*    value={description}*/}
      {/*  />*/}
      {/*  <input type="submit" value='submit'/>*/}
      {/*</form>*/}
    </div>
  )
}

export default Home