import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ recipes }) {
  const [expanded, setExpanded] = useState(false);
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

  const handleDeleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:3030/recipes/${recipeId}`);
      toast.success("Recipe Deleted");

    } catch (error) {
        toast.error("Error deleting recipe:", error)
    }
  };

  const handleEditRecipe = (recipeId) => {
    navigate(`/addRecipe/${recipeId}`);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {recipes.map((recipe) => (
        <Card sx={{ minWidth: 350, maxWidth: 350 }} key={recipe.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: yellow[700] }} aria-label="recipe">
                <LunchDiningIcon />
              </Avatar>
            }
            title={recipe.name}
            subheader={recipe.category}
          />
          {recipe.image && (
            <CardMedia
              component="img"
              height="194"
              image={recipe.image}
              alt={recipe.name}
            />
          )}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {/* {recipe.instructions} */}
              <p>
                prepation time: <b>{recipe.preparationTime}</b>
              </p>
              <p>
                cooking time: <b>{recipe.cookingTime}</b>
              </p>
              <p>
                serving: <b>{recipe.servings}</b>
              </p>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {userToggle && (
              <div>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleDeleteRecipe(recipe.id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEditRecipe(recipe.id)}
                >
                  <EditNoteIcon />
                </IconButton>
              </div>
            )}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="p">
                <b>Ingredients</b>
              </Typography>
              <Typography paragraph>{recipe.ingredients}</Typography>
              <br />
              <Typography variant="p">
                <b>Instructions</b>
              </Typography>
              <Typography paragraph>{recipe.instructions}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
