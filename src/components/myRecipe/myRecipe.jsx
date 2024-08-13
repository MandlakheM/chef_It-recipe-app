import React from "react";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p>{recipe.category}</p>
          <p>{recipe.instructions}</p>
          {/* Include buttons to edit and delete recipes */}
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
