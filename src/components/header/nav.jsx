import React, { useEffect } from "react";
import { useState } from "react";
import "./nav.css";
import SignUp from "../authentication/signUp/signUp";
import SignIn from "../authentication/signIn/signIn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function nav() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setUserToggle(false);
    } else {
      setUserToggle(true);
    }
  }, [userToggle]);

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

  function handleSignOut() {
    localStorage.removeItem("user");
    toast.success("You have signed out");
    setUserToggle(false);
    navigate("/");
  }

  return (
    <nav className="gutter">
      <div className="navContainer">
        <div className="logo">
          CHEF <span>it</span>
        </div>
        {userToggle && (
          <div className="navLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addRecipe">Add Recipe</Link>
              </li>
              <li>
                <Link to="/myRecipes">My Recipe's</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="auth">
          {userToggle ? (
            <button className="authbtn" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <>
              <button className="authbtn" onClick={activateSignInModal}>
                Sign In
              </button>
              {signInModal && (
                <SignIn deactivateSignInModal={deactivateSignInModal} />
              )}
              <button className="authbtn" onClick={activateSignUpModal}>
                Sign Up
              </button>
              {signUpModal && (
                <SignUp deactivateSignUpModal={deactivateSignUpModal} />
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default nav;
