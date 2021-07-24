import React, { Component } from "react";
import classes from "./Preview.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Paginations from "../../UI/paginations/paginations";
import Footer from "../../Footer/Footer";
import Spinner from "../../UI/spinner/spinner";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Preview extends Component {
  render() {
    let searchResult =
      this.props.resultsPerPage &&
      this.props.resultsPerPage.map((result) => (
        <SearchResults
          key={result.id}
          image_url={result.image_url}
          publisher={result.publisher}
          title={result.title}
          id={result.id}
          clickRecipe={this.props.fetchRecipeOnClick}
          updateActiveClass={this.props.updateActiveClass}
          checkBookmark={this.props.checkBookmark}
          active={this.props.active}
          recipe={this.props.recipe}
          apikey={result.key}
        />
      ));

    return (
      <div className={classes.Preview}>
        <ul className={classes.results}>
          {this.props.resultsFailed ? (
            <div className={classes.error}>
              <ReportProblemOutlinedIcon className={classes.errorIcon} />
              <p>No recipes found for your query! Please try again ;)</p>
            </div>
          ) : this.props.loading ? (
            <Spinner />
          ) : (
            searchResult
          )}
        </ul>
        <Paginations />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultsPerPage: state.search.resultsPerPage,
    recipeClick: state.recipe.recipeClick,
    loading: state.search.loading,
    resultsFailed: state.search.resultsFailed,
    recipe: state.recipe.recipe,
    active: state.recipe.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipeOnClick: (id) => dispatch(actions.fetchRecipeOnClick(id)),
    updateActiveClass: (id) => dispatch(actions.updateActiveClass(id)),
    checkBookmark: (active) => dispatch(actions.checkBookmark(active)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
