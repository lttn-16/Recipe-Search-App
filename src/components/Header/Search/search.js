import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./search.module.css";

const search = (props) => {
  return (
    <form className={classes.Search}>
      <input
        className={classes.searchField}
        type="text"
        placeholder="Search over 1.000.000 recipes..."
        onChange={(e) => props.searchInput(e)}
      />
      <button className={classes.searchBtn} onClick={(e) => props.clicked(e)}>
        <SearchIcon className={classes.searchIcon} />
        <span>Search</span>
      </button>
    </form>
  );
};

export default search;
