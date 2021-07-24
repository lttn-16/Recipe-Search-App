import * as actionTypes from "../actions/actionType";

const initialState = {
  bookmarks: [],
  bookmarked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSIST_BOOKMARK:
      localStorage.setItem("bookmark", JSON.stringify(state.bookmarks));
      return state;

    case actionTypes.ADD_BOOKMARK:
      const newBookmark = [...state.bookmarks];
      newBookmark.push(action.recipe);
      return {
        ...state,
        bookmarks: newBookmark,
        bookmarked: true,
      };

    case actionTypes.CHECK_BOOKMARK:
      if (
        state.bookmarks.some((bookmark) => bookmark.id === action.activeRecipe)
      ) {
        return {
          ...state,
          bookmarked: true,
        };
      } else {
        return {
          ...state,
          bookmarked: false,
        };
      }

    case actionTypes.DELETE_BOOKMARK:
      const index = state.bookmarks.findIndex((el) => el.id === action.id);
      const newBookmarks = [...state.bookmarks];
      newBookmarks.splice(index, 1);
      return {
        ...state,
        bookmarks: newBookmarks,
        bookmarked: false,
      };

    case actionTypes.CONTROL_BOOKMARK:
      const storage = localStorage.getItem("bookmark");
      if (storage) state.bookmarks = JSON.parse(storage);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
