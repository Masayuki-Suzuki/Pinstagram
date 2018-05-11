import {handleActions} from "redux-actions";

const searchPost = handleActions(
  {
    SEARCH_POST_DATA: (state, action) => ({
      ...state,
      text: action.payload.text,
    }),
  },
  { text: '' },
)

export default searchPost