import React from "react";
import "../styles/Recipe.css"
// import {Navigate} from "react-router-dom";
import { Link } from 'react-router-dom'; // Import Link from React Router
import Svg from "../assets/react.svg";


function Recipe({ recipe }) {
  const formattedDate = new Date(recipe.created_at).toLocaleDateString("en-US")

  return (
      <div className="card" style={{ width: '20%' }}>
        <div className="card-body">
          <Link to={`/recipes/${recipe.id}`} className="recipe-link">
            <img src={Svg} alt="Your SVG" />
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">{recipe.description}</p>
          </Link>
        </div>
      </div>
  );
}


export default Recipe