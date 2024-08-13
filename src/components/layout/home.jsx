import React from "react";
import Nav from "../header/nav";
import Hero from "../body/hero/hero";
import Categories from "../recipeCategories/categories"

function home() {
  return (
    <>
      <Nav />
      <Hero />
      <Categories/>
    </>
  );
}

export default home;
