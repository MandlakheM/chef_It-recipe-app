import "./addRecipe.css";
import React, { useState } from "react";
import axios from "axios";
import Nav from "../header/nav";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
// import { TextareaAutosize } from "@mui/material/TextareaAutosize";

function AddRecipe({ fetchRecipes }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddRecipe = async () => {
    try {
      await axios.post("http://localhost:3030/recipes", {
        name,
        ingredients,
        instructions,
        category,
        preparationTime,
        cookingTime,
        servings,
        image,
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="gutter">
        <div className="addContainer">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Add your recipe below
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="recipeName"
                      label="Recipe Name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="category"
                      label="Category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea
                      placeholder="Instructions"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="ingredients"
                      label="Ingredients"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="preparationTime"
                      label="Preparation Time"
                      id="preparationTime"
                      value={preparationTime}
                      onChange={(e) => setPreparationTime(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="cookingTime"
                      label="Cooking Time"
                      id="cookingTime"
                      value={cookingTime}
                      onChange={(e) => setCookingTime(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="servings"
                      label="Servings"
                      id="servings"
                      value={servings}
                      onChange={(e) => setServings(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleAddRecipe}
                >
                  ADD RECIPE
                </Button>
                <Grid container justifyContent="flex-end"></Grid>
              </Box>
            </Box>
          </Container>
          {/* <div className="formContainer">
            <h5>Add Recipe</h5>
            <input
              type="text"
              placeholder="Recipe Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
              placeholder="Instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <input type="file" name="" id="" />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="Preparation Time"
              value={preparationTime}
              onChange={(e) => setPreparationTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cooking Time"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Servings"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
            <button onClick={handleAddRecipe}>Add Recipe</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
