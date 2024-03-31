import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../api.js";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`useEffect ID: ${id}`)
    api.get(`api/recipes/${id}/`)
      .then(res => res.data)
      .then(data => {setRecipe(data); console.log(data)})
      // .catch((err) => alert(err))
  }, []);

  function handleDelete(id) {
    api.delete(`api/recipes/${id}/`)
      .then(res => res.data)
      .catch(err => console.log(err))
    navigate('/')
  }

  return(
    <div>
      <p>Title: {recipe.title}</p>
      <p>Desc: {recipe.description}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <p>Author: {recipe.author_username}</p>
      <img src={recipe.thumbnail} alt=""/>
      <button className='btn btn-primary' onClick={() => handleDelete(recipe.id)}>Delete</button>
    </div>
  )
}

export default RecipeDetail