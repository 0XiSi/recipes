import React from "react";
import "../styles/Recipe.css"
import { Link } from 'react-router-dom';


function Recipe({ recipe }) {
  const formattedDate = new Date(recipe.created_at).toLocaleDateString("en-US");

  return (
    <div className="col mb-4">
      <div className="card">
        <Link to={`/recipes/${recipe.id}`} className="recipe-link">
          <img src={recipe.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">{recipe.description}</p>
            <p className="card-link">{formattedDate}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}


export default Recipe