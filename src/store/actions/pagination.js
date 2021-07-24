import * as actionTypes from "./actionType";

//Control pagination
export const getSearchResultPage = (page) => {
  return {
    type: actionTypes.GET_RESULTS_PAGE,
    page: page,
  };
};

export const clickNextBtn = (pageClick) => {
  return {
    type: actionTypes.CLICK_NEXT_BTN,
    pageClick: pageClick,
  };
};

export const clickPrevBtn = (pageClick) => {
  return {
    type: actionTypes.CLICK_PREV_BTN,
    pageClick: pageClick,
  };
};
