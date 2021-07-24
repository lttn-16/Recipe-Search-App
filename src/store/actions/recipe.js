import axios from "axios";
import * as actionTypes from "./actionType";

//Recipe
export const loadRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RECIPE_ON_CLICK_START,
  };
};

export const loadRecipeSuccess = (recipeLoad) => {
  return {
    type: actionTypes.FETCH_RECIPE_SUCCESS,
    recipes: recipeLoad,
  };
};

export const fetchRecipeOnClick = (id) => {
  return (dispatch) => {
    dispatch(loadRecipeStart());
    return axios
      .get(`${actionTypes.API_URL}${id}?key=${actionTypes.KEY}`)
      .then((response) => {
        dispatch(loadRecipeSuccess(response.data));
      });
  };
};

export const updateServing = (newServings) => {
  return {
    type: actionTypes.UPDATE_SERVINGS,
    newServings: newServings,
  };
};

export const updateActiveClass = (id) => {
  return {
    type: actionTypes.UPDATE_ACTIVE_CLASS,
    id: id,
  };
};

export const addNewRecipe = (newRecipe, ingredients) => {
  return {
    type: actionTypes.ADD_NEW_RECIPE,
    newRecipe: newRecipe,
    ingredients: ingredients,
  };
};

export const uploadRecipeStart = () => {
  return {
    type: actionTypes.UPLOAD_NEW_RECIPE_START,
  };
};

export const uploadRecipeSuccess = (data) => {
  return {
    type: actionTypes.UPLOAD_NEW_RECIPE_SUCCESS,
    data: data,
  };
};

export const uploadRecipeFailed = (error) => {
  return {
    type: actionTypes.UPLOAD_NEW_RECIPE_FAIL,
    error: error,
  };
};

export const uploadNewRecipe = (uploadRecipe) => {
  return (dispatch) => {
    dispatch(uploadRecipeStart());
    return axios
      .post(`${actionTypes.API_URL}?key=${actionTypes.KEY}`, uploadRecipe)
      .then((res) => {
        dispatch(uploadRecipeSuccess(res.data.data.recipe));
      })
      .catch((err) => {
        dispatch(uploadRecipeFailed(err.message));
      });
  };
};

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};
