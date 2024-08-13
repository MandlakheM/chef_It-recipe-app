import React from "react";
import { useState } from "react";
import "./nav.css";
import SignUp from "../authentication/signUp/signUp";
import SignIn from "../authentication/signIn/signIn";

function nav() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  function activateSignUpModal() {
    setSignUpModal(true);
  }

  function activateSignInModal() {
    setSignInModal(true);
  }

  function deactivateSignUpModal() {
    setSignUpModal(false);
  }

  function deactivateSignInModal() {
    setSignInModal(false);
  }
  return (
    <nav className="gutter">
      <div className="navContainer">
        <div className="logo">CHEF it</div>
        <div className="navLinks">
          <ul>
            <li>Home</li>
            <li>Add Recipe</li>
            <li>My Recipe's</li>
          </ul>
        </div>

        <div className="auth">
          <div className="wrap-input-17">
            <div className="search-box">
              <button className="btn-search">🔍</button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </div>
          </div>
          <button onClick={activateSignInModal}>Sign In</button>
          {signInModal && <SignIn deactivateSignInModal={deactivateSignInModal}/>}
          <button onClick={activateSignUpModal}>Sign Up</button>
          {signUpModal && (
            <SignUp deactivateSignUpModal={deactivateSignUpModal} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default nav;
