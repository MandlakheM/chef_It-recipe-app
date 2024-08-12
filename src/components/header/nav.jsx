import React from "react";
import "./nav.css";

function nav() {
  return (
    <nav className="gutter">
      <div className="navContainer">
        <div className="logo">CHEF IT</div>
        <div className="navLinks">
          <ul>
            <li>Home</li>
            <li>Add Recipe</li>
            <li>My Recipe's</li>
          </ul>
        </div>

        <div className="auth">
          <div class="wrap-input-17">
            <div class="search-box">
              <button class="btn-search">🔍</button>
              <input
                type="text"
                class="input-search"
                placeholder="Type to Search..."
              />
            </div>
          </div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default nav;
