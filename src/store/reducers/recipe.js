import * as actionTypes from "../actions/actionType";

const initialState = {
  recipe: {},
  recipeServing: 4,
  recipeClick: false,
  loadingRecipe: false,
  active: null,
  newRecipe: {},
  uploadClick: false,
  uploadRecipe: false,
  show: false,
  err: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // load recipe
    case actionTypes.FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loadingRecipe: false,
        recipe: action.recipes.data.recipe,
      };

    case actionTypes.FETCH_RECIPE_ON_CLICK_START:
      return {
        ...state,
        loadingRecipe: true,
        recipeClick: true,
        recipeServing: 4,
      };

    case actionTypes.UPDATE_SERVINGS:
      if (action.newServings <= 0)
        return {
          ...state,
        };
      else {
        state.recipe.ingredients.forEach((ing) => {
          ing.quantity =
            (ing.quantity * action.newServings) / state.recipeServing;
        });
        return {
          ...state,
          recipeServing: action.newServings,
        };
      }

    //active class
    case actionTypes.UPDATE_ACTIVE_CLASS:
      return {
        ...state,
        active: action.id,
      };

    case actionTypes.UPLOAD_NEW_RECIPE_START:
      return {
        ...state,
        uploadRecipe: true,
      };

    case actionTypes.UPLOAD_NEW_RECIPE_SUCCESS:
      const newRe = {
        ...state.newRecipe,
        id: action.data.id,
        key: action.data.key,
      };
      return {
        ...state,
        recipe: action.data,
        uploadRecipe: false,
        recipeClick: true,
        newRecipe: newRe,
      };

    case actionTypes.UPLOAD_NEW_RECIPE_FAIL:
      return {
        ...state,
        uploadRecipe: false,
        err: action.error,
      };

    case actionTypes.ADD_NEW_RECIPE:
      const ingredients = Object.values(action.ingredients)
        .map((ing) => ing.split(",").map((el) => el.trim()))
        .map((ings) => {
          const [quantity, unit, description] = ings;
          return { quantity: quantity ? +quantity : null, unit, description };
        });
      const newR = action.newRecipe;
      const newRecipe = { ingredients, ...newR };
      return {
        ...state,
        newRecipe: newRecipe,
        uploadClick: true,
      };

    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        show: true,
        uploadClick: false,
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        show: false,
        newRecipe: null,
        uploadRecipe: false,
        err: "",
      };

    default:
      return state;
  }
};

export default reducer;
