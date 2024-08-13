import "./App.css";
import { useState } from "react";
import Home from "./components/layout/home";
import SignUp from "./components/authentication/signUp/signUp";
import SignIn from "./components/authentication/signIn/signIn";
import AddRecipe from "./components/addRecipe/addRecipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/k" element={<SignUp/>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <AddRecipe/>
    </>
  );
}

export default App;
