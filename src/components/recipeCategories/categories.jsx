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
        <div mx-4 my-4  >
          <button className="breakfast"></button>
          <p className="catHeadings">Breakfast</p>
        </div>
        {/* <div className="breakfast"></div> */}
        <div>
          <button className="lunch"></button>
          <p className="catHeadings">Lunch</p>
        </div>
        {/* <div className="lunch"></div> */}
        <div>
          <button className="dinner"></button>
          <p className="catHeadings">Dinner</p>
        </div>
        {/* <div className="dinner"></div> */}
        <div>
          <button className="dessert"></button>
          <p className="catHeadings">Dessert</p>
        </div>
        {/* <div className="dessert"></div> */}
      </div>
      <div className="cardContainer">
        <RecipeReviewCard recipes={recipes} />
      </div>
    </div>
  );
}

export default categories;
