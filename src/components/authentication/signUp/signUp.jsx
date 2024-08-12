import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";
// import TextField from '@mui/material/TextField';
// import { useNavigate } from "react-router-dom";

function SignUp({deactivateModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:3030/users", {
        username,
        password,
      });
      //   navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="overlay">
      <div className="modal" onClick={()=>deactivateModal()}></div>
      <div className="modalContent">
        <h2>Sign Up</h2>
        {/* <TextField label="Outlined" variant="outlined" /> */}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Sign Up</button>
        <button className="closeModal" onClick={()=>deactivateModal()}>Close</button>
      </div>
    </div>
  );
}

export default SignUp;
