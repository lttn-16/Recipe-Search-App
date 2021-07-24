import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import Search from "./Search/search";
import classes from "./header.module.css";
import Button from "./Button/button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Header extends Component {
  state = {
    searchClick: false,
    keyword: "",
  };

  enterSearchInput = (e) => {
    return this.setState({
      ...this.state,
      keyword: e.target.value,
    });
  };

  searchClickHandler = (e) => {
    e.preventDefault();
    return this.setState({
      ...this.state,
      searchClick: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchClick &&
      prevState.searchClick !== this.state.searchClick
    ) {
      // send get request
      this.props.searchResults(this.state.keyword).then(() => {
        if (!this.props.resultsFailed)
          this.props.getSearchResultPage(this.props.page, this.props.results);
      });

      //Update searchClick state
      this.setState({ ...this.state, searchClick: false });
    }
  }

  render() {
    return (
      <div className={classes.Header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Search
          clicked={this.searchClickHandler}
          searchInput={this.enterSearchInput}
        />
        <Button
          bookmarks={this.props.bookmarks}
          fetchRecipeOnClick={this.props.fetchRecipeOnClick}
          updateActiveClass={this.props.updateActiveClass}
          checkBookmark={this.props.checkBookmark}
          active={this.props.active}
          openModal={this.props.openModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results,
    page: state.search.page,
    resultsFailed: state.search.resultsFailed,
    bookmarks: state.bookmark.bookmarks,
    active: state.recipe.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchResults: (keyword) => dispatch(actions.fetchSearchRecipe(keyword)),
    getSearchResultPage: (page, result) =>
      dispatch(actions.getSearchResultPage(page, result)),
    fetchRecipeOnClick: (id) => dispatch(actions.fetchRecipeOnClick(id)),
    updateActiveClass: (id) => dispatch(actions.updateActiveClass(id)),
    checkBookmark: (active) => dispatch(actions.checkBookmark(active)),
    openModal: () => dispatch(actions.openModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
