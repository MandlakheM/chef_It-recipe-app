import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function SignIn({deactivateSignInModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3030/users?username=${username}&password=${password}`
      );
      if (response.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        // navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="overlay">
      <div className="modal" onClick={()=>deactivateSignInModal()}></div>
      <div className="modalContent">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button className="closeModal" onClick={()=>deactivateSignInModal()}>Close</button>

      </div>
    </div>
  );
}

export default SignIn;
