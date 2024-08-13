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
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const handleEditRecipe = () => {
    console.log("Edit recipe");
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {recipes.map((recipe) => (
        <Card sx={{ minWidth: 350, maxWidth:350 }} key={recipe.id}>
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
                  onClick={handleEditRecipe}
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
              <Typography paragraph>{recipe.instructions}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
