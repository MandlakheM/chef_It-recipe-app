import "./App.css";
import { useState } from "react";
import Home from "./components/layout/home";
import SignUp from "./components/authentication/signUp/signUp";
import SignIn from "./components/authentication/signIn/signIn";
import AddRecipe from "./components/addRecipe/addRecipe";
import MyRecipe from "./components/myRecipe/myRecipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Home/> */}
      <ToastContainer />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/myRecipes" element={<MyRecipe />} />
        <Route path="/addRecipe/:id?" element={<AddRecipe />} />
      </Routes>
    </>
  );
}

export default App;
