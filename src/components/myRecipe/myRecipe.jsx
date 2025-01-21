import React, { useEffect, useState } from "react";
import "./myRecipe.css";
import Nav from "../header/nav";

import axios from "axios";
import FetchRecipe from "./fetchRecipe";
import { useNavigate } from "react-router-dom";
import RecipeReviewCard from "../card/card";
import { toast } from "react-toastify";


function MyRecipe() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      fetchRecipes();
    }
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://chef-it-recipe-app2.onrender.com/recipes");
      setRecipes(response.data);
    } catch (error) {
        toast.error("Error fetching recipes:", error)
    }
  };

  return (
    <>
      <Nav />
      <div className="gutter">
        {" "}
        <div className="cardContainer">
          {/* <p>Recipe List</p> */}
          {/* <FetchRecipe recipes={recipes} /> */}
          <RecipeReviewCard recipes={recipes} />
          {/* Add New Recipe Form and Search Bar could be included here */}
        </div>
      </div>
    </>
  );
}

export default MyRecipe;
