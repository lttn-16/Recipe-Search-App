import axios from "axios";
import * as actionTypes from "./actionType";

// search
export const getSearchRecipeStart = () => {
  return {
    type: actionTypes.GET_SEARCH_RECIPE_START,
  };
};

export const getSearchRecipeSuccess = (results) => {
  return {
    type: actionTypes.GET_SEARCH_RECIPE_SUCCESS,
    results: results,
  };
};

export const getSearchRecipeFail = () => {
  return {
    type: actionTypes.GET_SEARCH_RECIPE_FAIL,
  };
};

export const fetchSearchRecipe = (query) => {
  return (dispatch) => {
    dispatch(getSearchRecipeStart());
    return axios
      .get(`${actionTypes.API_URL}?search=${query}&key=${actionTypes.KEY}`)
      .then((response) => {
        const {
          data: {
            data: { recipes },
          },
        } = response;
        if (recipes.length > 0) {
          dispatch(getSearchRecipeSuccess(response.data));
        } else dispatch(getSearchRecipeFail());
      })
      .catch((err) => console.log(err));
  };
};
