import React from "react";
import { useState } from "react";
import "./nav.css";
import SignUp from "../authentication/signUp/signUp";

function nav() {
  const [modal, setModal] = useState(false);

  function activateModal() {
    setModal(true);
  }

  function deactivateModal() {
    setModal(false);
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
          <button onClick={activateModal}>Sign In</button>
          <button onClick={activateModal}>Sign Up</button>
          {modal && <SignUp deactivateModal={deactivateModal} />}
        </div>
      </div>
    </nav>
  );
}

export default nav;
