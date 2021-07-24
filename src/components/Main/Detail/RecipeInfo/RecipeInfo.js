import React, { Component } from "react";
import classes from "./RecipeInfo.module.css";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

class RecipeInfo extends Component {
  handleBookmark = () => {
    if (!this.props.bookmarked)
      this.props.addBookmark(this.props.recipeLoad, this.props.recipeLoad);
    else
      this.props.deleteBookmark(
        this.props.recipeLoad.id,
        this.props.recipeLoad
      );
    this.props.persistBookmark();
  };

  render() {
    const iconBookmark = this.props.bookmarked ? (
      <BookmarkOutlinedIcon className={classes.btnRoundIcon} />
    ) : (
      <BookmarkBorderOutlinedIcon className={classes.btnRoundIcon} />
    );

    const userIcon = this.props.recipeLoad.key
      ? [classes.recipe__user]
      : [classes.recipe__user, classes.hidden];

    return (
      <div className={classes.recipe__details}>
        <div className={classes.recipe__info}>
          <QueryBuilderIcon className={classes.recipe__infoIcon} />
          <span className={classes.infoData}>
            {this.props.recipeLoad.cooking_time}
          </span>
          <span>minutes</span>
        </div>
        <div className={classes.recipe__info}>
          <PeopleAltOutlinedIcon className={classes.recipe__infoIcon} />
          <span className={classes.infoData}>{this.props.recipeServing}</span>
          <span>servings</span>
          <div className={classes.infoBtn}>
            <button
              className={classes.btnTiny}
              onClick={() =>
                this.props.updateServings(this.props.recipeServing - 1)
              }
            >
              <RemoveCircleOutlineOutlinedIcon
                className={classes.recipe__infoIcon2}
              />
            </button>
            <button
              className={classes.btnTiny}
              onClick={() =>
                this.props.updateServings(this.props.recipeServing + 1)
              }
            >
              <AddCircleOutlineOutlinedIcon
                className={classes.recipe__infoIcon2}
              />
            </button>
          </div>
        </div>
        <div className={userIcon.join(" ")}>
          <PersonOutlineIcon className={classes.recipe__userIcon} />
        </div>
        <button className={classes.btnRound} onClick={this.handleBookmark}>
          {iconBookmark}
        </button>
      </div>
    );
  }
}

export default RecipeInfo;
