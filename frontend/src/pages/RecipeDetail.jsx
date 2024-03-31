import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api.js";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`useEffect ID: ${id}`);
    api.get(`api/recipes/${id}/`)
      .then(res => res.data)
      .then(data => { setRecipe(data); console.log(data); })
      .catch(err => console.log(err));
  }, [id]);

  function handleDelete(id) {
    api.delete(`api/recipes/${id}/`)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.description}</p>
              <p className="card-text">Ingredients: {recipe.ingredients}</p>
              <p className="card-text">Instructions: {recipe.instructions}</p>
              <p className="card-text">Author: {recipe.author_username}</p>
              <img className="img-fluid" src={recipe.thumbnail} alt={recipe.title} />
            </div>
            <button className="btn btn-danger mt-3" onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
