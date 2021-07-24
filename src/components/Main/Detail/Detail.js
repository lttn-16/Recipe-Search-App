import React, { Component } from "react";
import classes from "./Detail.module.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import Spinner from "../../UI/spinner/spinner";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    let recipeLoaded = this.props.loadingRecipe ? (
      <Spinner />
    ) : (
      <RecipeDetails
        recipeLoad={this.props.recipe}
        updateServings={this.props.updateServing}
        recipeServing={this.props.recipeServing}
        addBookmark={this.props.addBookmark}
        deleteBookmark={this.props.deleteBookmark}
        persistBookmark={this.props.persistBookmark}
        bookmarked={this.props.bookmarked}
        active={this.props.active}
      />
    );

    let recipe = this.props.recipeClicked ? (
      recipeLoaded
    ) : (
      <div className={classes.message2}>
        <div>
          <InsertEmoticonIcon className={classes.messIcon} />
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    );
    return <div className={classes.recipe2}>{recipe}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    recipeClicked: state.recipe.recipeClick,
    recipe: state.recipe.recipe,
    loadingRecipe: state.recipe.loadingRecipe,
    recipeServing: state.recipe.recipeServing,
    bookmarked: state.bookmark.bookmarked,
    active: state.recipe.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateServing: (newServings) =>
      dispatch(actions.updateServing(newServings)),
    addBookmark: (recipe, rep) => dispatch(actions.addBookmark(recipe, rep)),
    deleteBookmark: (id, rep) => dispatch(actions.deleteBookmark(id, rep)),
    persistBookmark: () => dispatch(actions.persistBookmark()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
