import { useState, useEffect } from "react";
import api from "../api";
import Recipe from "../components/Recipe.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
  api.get(nextPage || '/api/recipes/') // Fetch next page if available, otherwise fetch initial page
    .then(res => res.data)
    .then(data => {
      if (!recipes.length) {
        setRecipes(data.results);
      } else {
        setRecipes(prevRecipes => [...prevRecipes, ...data.results]);
      }
      setNextPage(data.next); // Update next page URL
    })
    .catch((err) => alert(err));
};


  const loadMoreRecipes = () => {
    getRecipes(); // Fetch next page of recipes
  };

  return (
    <div>
      <h2>
        Recipes <input
          className='btn btn-outline-success'
          onClick={() => navigate("/create_recipe")}
          value="Create Your Own recipe"
          type="button"
        />
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.id} />
          ))}
        </div>
        {nextPage && (
          <button
            className='btn btn-primary mt-3'
            onClick={loadMoreRecipes}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
