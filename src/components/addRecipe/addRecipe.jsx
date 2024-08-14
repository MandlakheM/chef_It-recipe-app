import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../header/nav";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function AddRecipe({ fetchRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/recipes/${id}`
          );
          const recipe = response.data;
          setName(recipe.name || "");
          setIngredients(recipe.ingredients || "");
          setInstructions(recipe.instructions || "");
          setCategory(recipe.category || "");
          setPreparationTime(recipe.preparationTime || "");
          setCookingTime(recipe.cookingTime || "");
          setServings(recipe.servings || "");
          setImage(recipe.image || null);
        } catch (error) {
          console.error("Error fetching recipe details:", error);
        }
      };
      fetchRecipe();
    }
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      name.trim() &&
      ingredients.trim() &&
      instructions.trim() &&
      category.trim() &&
      preparationTime.trim() &&
      cookingTime.trim() &&
      servings.trim() !== ""
    ) {
      try {
        if (id) {
          await axios.put(`http://localhost:3030/recipes/${id}`, {
            name,
            ingredients,
            instructions,
            category,
            preparationTime,
            cookingTime,
            servings,
            image,
          });
        } else {
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
        }
        navigate("/");
      } catch (error) {
        console.error("Error saving recipe:", error);
      } finally {
        setLoading(false);
      }
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
                {id ? "Edit your recipe" : "Add your recipe"}{" "}
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={handleSubmit}
              >
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
                  disabled={loading}
                >
                  {id ? "Update Recipe" : "Add Recipe"}{" "}
                </Button>
                <Grid container justifyContent="flex-end"></Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
