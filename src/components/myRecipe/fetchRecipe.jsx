import React from "react";

function fetchRecipe({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.name}</p>
          <p>{recipe.category}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default fetchRecipe;
