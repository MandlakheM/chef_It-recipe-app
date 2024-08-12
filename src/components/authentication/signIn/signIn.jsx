import React from "react";
import "./signIn.css";

function signIn() {
  return (
    <div>
      <div className="overlay">
        <div className="modal"></div>
        <div className="modalContent">
          <h2>Sign In</h2>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <button className="closeModal">Close</button>
        </div>
      </div>
    </div>
  );
}

export default signIn;
