import * as actionTypes from "./actionType";

export const persistBookmark = () => {
  return {
    type: actionTypes.PERSIST_BOOKMARK,
  };
};

export const addBookmark = (recipe) => {
  return {
    type: actionTypes.ADD_BOOKMARK,
    recipe: recipe,
  };
};

export const deleteBookmark = (id) => {
  return {
    type: actionTypes.DELETE_BOOKMARK,
    id: id,
  };
};

export const checkBookmark = (activeRecipe) => {
  return {
    type: actionTypes.CHECK_BOOKMARK,
    activeRecipe: activeRecipe,
  };
};

export const controlBookmark = () => {
  return {
    type: actionTypes.CONTROL_BOOKMARK,
  };
};
