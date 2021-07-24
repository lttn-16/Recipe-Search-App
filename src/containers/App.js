import React, { Component } from "react";
import Header from "../components/Header/header";
import Main from "../components/Main/Main";
import AddRecipeModal from "./AddRecipeModal/AddRecipeModal";
import classes from "./App.module.css";
import * as actions from "../store/actions/index";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.controlBookmark();
  }

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Main />
        <AddRecipeModal
          show={this.props.show}
          modalClosed={this.props.modalClosed}
          uploadNewRecipe={this.props.uploadNewRecipe}
          addNewRecipe={this.props.addNewRecipe}
          newRecipe={this.props.newRecipe}
          uploadClick={this.props.uploadClick}
          uploadRecipe={this.props.uploadRecipe}
          addBookmark={this.props.addBookmark}
          updateActiveClass={this.props.updateActiveClass}
          persistBookmark={this.props.persistBookmark}
          err={this.props.err}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.recipe.show,
    newRecipe: state.recipe.newRecipe,
    uploadClick: state.recipe.uploadClick,
    uploadRecipe: state.recipe.uploadRecipe,
    persistBookmark: state.bookmark.persistBookmark,
    err: state.recipe.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    controlBookmark: () => dispatch(actions.controlBookmark()),
    modalClosed: () => dispatch(actions.closeModal()),
    addNewRecipe: (newRecipe, ingredients) =>
      dispatch(actions.addNewRecipe(newRecipe, ingredients)),
    uploadNewRecipe: (newRe) => dispatch(actions.uploadNewRecipe(newRe)),
    addBookmark: (newRe) => dispatch(actions.addBookmark(newRe)),
    updateActiveClass: (id) => dispatch(actions.updateActiveClass(id)),
    persistBookmark: () => dispatch(actions.persistBookmark()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
