import React from "react";
import classes from "./RecipeDetails.module.css";
import Ingredient from "../Ingredients/Ingredient";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

const RecipeDetails = (props) => {
  return (
    <React.Fragment>
      <figure className={classes.recipe__fig}>
        <img src={props.recipeLoad.image_url} alt={props.recipeLoad.title} />
        <h1 className={classes.recipe__title}>
          <span>{props.recipeLoad.title}</span>
        </h1>
      </figure>
      <RecipeInfo
        recipeLoad={props.recipeLoad}
        updateServings={props.updateServings}
        recipeServing={props.recipeServing}
        persistBookmark={props.persistBookmark}
        addBookmark={props.addBookmark}
        deleteBookmark={props.deleteBookmark}
        bookmarked={props.bookmarked}
        active={props.active}
      />
      <Ingredient recipeLoad={props.recipeLoad} />
    </React.Fragment>
  );
};

export default RecipeDetails;
