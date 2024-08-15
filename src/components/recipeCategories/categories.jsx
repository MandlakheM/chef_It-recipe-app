// import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import "./categories.css";
import axios from "axios";
import RecipeReviewCard from "../card/card";
import { toast } from "react-toastify";


function categories() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetchHeroRecipes();
  }, []);

  const fetchHeroRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3030/recipes");
      setRecipes(response.data);
      setFilteredRecipes(response.data); 
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleCategoryClick = (category) => {
    const filtered = recipes.filter((recipe) => recipe.category === category);
    setFilteredRecipes(filtered);
  };

  return (
    <div className="gutter">
      <div className="catContainer">
        <div>
          <button
            className="breakfast"
            onClick={() => handleCategoryClick("breakfast")}
          ></button>
          <p className="catHeadings">Breakfast</p>
        </div>
        <div>
          <button
            className="lunch"
            onClick={() => handleCategoryClick("lunch")}
          ></button>
          <p className="catHeadings">Lunch</p>
        </div>
        <div>
          <button
            className="dinner"
            onClick={() => handleCategoryClick("dinner")}
          ></button>
          <p className="catHeadings">Dinner</p>
        </div>
        <div>
          <button
            className="dessert"
            onClick={() => handleCategoryClick("dessert")}
          ></button>
          <p className="catHeadings">Dessert</p>
        </div>
      </div>
      <div className="cardContainer">
        <RecipeReviewCard recipes={filteredRecipes} />
      </div>
    </div>
  );
}

export default categories;
