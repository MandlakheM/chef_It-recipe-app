import React, { useState } from "react";
import axios from "axios";

function AddRecipe({ fetchRecipes }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");

  const handleAddRecipe = async () => {
    try {
      await axios.post("http://localhost:3030/recipes", {
        name,
        ingredients,
        instructions,
        category,
        preparationTime,
        cookingTime,
        servings,
      });
      fetchRecipes(); // Refresh the list after adding
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div>
      <h3>Add Recipe</h3>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preparation Time"
        value={preparationTime}
        onChange={(e) => setPreparationTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cooking Time"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
}

export default AddRecipe;
