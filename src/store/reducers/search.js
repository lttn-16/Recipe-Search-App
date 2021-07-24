import * as actionTypes from "../actions/actionType";

const initialState = {
  results: [],
  loading: false,
  resultsFailed: false,
  numPages: 0,
  page: 1,
  resultsPerPage: [],
  resultPerPage: actionTypes.RES_PER_PAGE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // load search
    case actionTypes.GET_SEARCH_RECIPE_START:
      return {
        ...state,
        resultsFailed: false,
        loading: true,
        page: 1,
      };

    case actionTypes.GET_SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        resultsFailed: false,
        results: action.results.data.recipes,
        numPages: Math.ceil(
          action.results.data.recipes.length / state.resultPerPage
        ),
      };

    case actionTypes.GET_SEARCH_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        resultsFailed: true,
      };

    // Control pagination
    case actionTypes.GET_RESULTS_PAGE:
      const start = (action.page - 1) * state.resultPerPage;
      const end = action.page * state.resultPerPage;
      return {
        ...state,
        page: action.page,
        loading: false,
        resultsPerPage: state.results.slice(start, end),
      };

    case actionTypes.CLICK_NEXT_BTN:
      return {
        ...state,
        loading: true,
        page: action.pageClick,
      };

    case actionTypes.CLICK_PREV_BTN:
      return {
        ...state,
        loading: true,
        page: action.pageClick,
      };

    default:
      return state;
  }
};

export default reducer;
