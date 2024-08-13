// import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import "./categories.css";
import axios from "axios";
import RecipeReviewCard from "../card/card";

function categories() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchHeroRecipes();
  }, []);

  const fetchHeroRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3030/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <div className="gutter">
      <div className="catContainer">
        <button className="breakfast">breakfast</button>
        {/* <div className="breakfast"></div> */}
        <button className="lunch">lunch</button>
        {/* <div className="lunch"></div> */}
        <button className="dinner">dinner</button>
        {/* <div className="dinner"></div> */}
        <button className="dessert">dessert</button>
        {/* <div className="dessert"></div> */}
      </div>
      <div className="cardContainer">
        <RecipeReviewCard recipes={recipes} />
      </div>
    </div>
  );
}

export default categories;
