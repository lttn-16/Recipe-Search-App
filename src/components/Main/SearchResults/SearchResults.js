/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./SearchResults.module.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const SearchResults = (props) => {
  const clickedRecipe = () => {
    props.clickRecipe(props.id);
    props.updateActiveClass(props.id);
    props.checkBookmark(props.id);
  };

  const classActive =
    props.id === props.active
      ? [classes.preview__linkActive, classes.preview]
      : [classes.preview];

  const userIcon = props.apikey
    ? [classes.preview__user]
    : [classes.preview__user, classes.hidden];

  return (
    <li className={classActive.join(" ")} onClick={clickedRecipe}>
      <div className={classes.preview__link}>
        <figure className={classes.preview__fig}>
          <img src={props.image_url} alt={props.title} />
        </figure>
        <div className={classes.preview__data}>
          <h4 className={classes.preview__title}>{props.title}</h4>
          <p className={classes.preview__publisher}>{props.publisher}</p>
          <div className={userIcon.join(" ")}>
            <PersonOutlineIcon className={classes.preview__userIcon} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default SearchResults;
