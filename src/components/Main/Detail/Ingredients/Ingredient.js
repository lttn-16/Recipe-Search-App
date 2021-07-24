import React from "react";
import { Fraction } from "fractional";
import classes from "./Ingredients.module.css";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

const Ingredient = (props) => {
  return (
    <div>
      <div className={classes.recipe__ingredients}>
        <h2 className={classes.recipe__heading}>Recipe ingredients</h2>
        <ul className={classes.recipe__ingredientsList}>
          {props.recipeLoad.ingredients.map((ing) => (
            <li
              className={classes.recipe__ingredient}
              key={props.recipeLoad.id + Math.random().toString()}
            >
              <CheckOutlinedIcon className={classes.Icon} />
              <div className={classes.recipe__quantity}>
                {ing.quantity ? new Fraction(ing.quantity).toString() : ""}
              </div>
              <div>
                <span className={classes.recipe__unit}>{ing.unit}</span>
                {ing.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.recipe__directions}>
        <h2 className={classes.heading2}>How to cook it</h2>
        <p className={classes.recipe__directionsText}>
          This recipe was carefully designed and tested by
          <span className={classes.recipe__publisher}>
            {props.recipeLoad.publisher}
          </span>
          . Please check out directions at their website.
        </p>
        <a
          className={classes.btnSmall}
          href={props.recipeLoad.source_url}
          target="_blank"
          rel="noreferrer"
        >
          <span>Directions</span>
          <ArrowForwardOutlinedIcon className={classes.btnArrowIcon} />
        </a>
      </div>
    </div>
  );
};

export default Ingredient;
