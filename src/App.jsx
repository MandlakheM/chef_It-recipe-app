import "./App.css";
import { useState } from "react";
import Nav from "./components/header/nav";
import Hero from "./components/body/hero/hero";
import Categories from "./components/body/recipeCategories/categories";
import SignUp from "./components/authentication/signUp/signUp";

function App() {
  return (
    <>
      <Nav />
      <Hero/>
      {/* <Categories/> */}
    </>
  );
}

export default App;
