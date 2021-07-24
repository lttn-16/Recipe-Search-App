import React from "react";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SearchResults from "../../Main/SearchResults/SearchResults";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <button className={classes.nav__btn} onClick={props.openModal}>
            <AddBoxOutlinedIcon className={classes.nav__icon} />
            <span>Add recipe</span>
          </button>
        </li>

        <li className={classes.nav__item}>
          <button
            className={`${classes.nav__btnbookmarks} ${classes.nav__btn}`}
          >
            <BookmarkBorderIcon className={classes.nav__icon} />
            <span>Bookmarks</span>
          </button>

          <div className={classes.bookmarks}>
            <ul className={classes.bookmarks__list}>
              {props.bookmarks.length > 0 ? (
                props.bookmarks.map((bm) => (
                  <SearchResults
                    key={bm.id}
                    image_url={bm.image_url}
                    publisher={bm.publisher}
                    title={bm.title}
                    id={bm.id}
                    clickRecipe={props.fetchRecipeOnClick}
                    updateActiveClass={props.updateActiveClass}
                    checkBookmark={props.checkBookmark}
                    active={props.active}
                    apikey={bm.key}
                  />
                ))
              ) : (
                <div className={classes.message}>
                  <ReportProblemOutlinedIcon className={classes.messIcon} />
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>
              )}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Button;
