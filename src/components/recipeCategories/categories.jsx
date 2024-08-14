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
        <div>
          <button className="breakfast">breakfast</button>
        </div>
        {/* <div className="breakfast"></div> */}
        <div>
          <button className="lunch">lunch</button>
        </div>
        {/* <div className="lunch"></div> */}
        <div>
          <button className="dinner">dinner</button>
        </div>
        {/* <div className="dinner"></div> */}
        <div>
          <button className="dessert">dessert</button>
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
