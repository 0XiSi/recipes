import React, { useState } from "react";
import api from "../api.js";
import '../styles/Form.css'

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstruction] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const createRecipe = (e) => {
    e.preventDefault();

    console.log(image)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);
    formData.append("thumbnail", image);

    api
      .post("/api/recipes/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 201) console.log("RecipeDetail created!");
        else alert("Failed to make recipe.");
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <form onSubmit={createRecipe} encType='multipart/form-data'>
        <label htmlFor="title">Title: </label> <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description">Description: </label> <br />
        <textarea
          id="description"
          name="description"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <label htmlFor="description">Ingredients: </label> <br />
        <textarea
          id="ingredients"
          name="ingredients"
          required
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
          value={ingredients}
        />
        <label htmlFor="description">Instructions: </label> <br />
        <textarea
          id="instructions"
          name="instructions"
          required
          onChange={(e) => {
            setInstruction(e.target.value);
          }}
          value={instructions}
        />
        <label htmlFor="image">Image: </label> <br />
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          required
          onChange={handleImageChange}
          className='form-input'
        />
        <p className='small'><li>File size must be less than 5 megabytes</li></p>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default CreateRecipe;
