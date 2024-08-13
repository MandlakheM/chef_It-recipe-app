import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ImCross } from "react-icons/im";// import { useNavigate } from "react-router-dom";

function SignIn({deactivateSignInModal}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async () => {
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
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label=""
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="formBtn"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
      <ImCross className="closeModal" onClick={()=>deactivateSignInModal()}/>
        {/* <button className="closeModal" onClick={()=>deactivateSignInModal()}>Close</button> */}

      </div>
    </div>
  );
}

export default SignIn;
