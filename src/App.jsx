import "./App.css";
import { useState } from "react";
import Home from "./components/layout/home";
import SignUp from "./components/authentication/signUp/signUp";
import SignIn from "./components/authentication/signIn/signIn";
import AddRecipe from "./components/addRecipe/addRecipe";
import MyRecipe from "./components/myRecipe/myRecipe"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home/> */}
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Home />} />
          <Route path="/addRecipe" element={<AddRecipe/>} />
          <Route path="/myRecipes" element={<MyRecipe/>} />
        </Routes>    
    </>
  );
}

export default App;
