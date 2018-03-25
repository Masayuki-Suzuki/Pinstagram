import { handleActions } from "redux-actions";
import { author, comments, post } from "../components/seed";

const reducer = handleActions({
  CHANGE_STRING: (state, action) => ({
    stringData: action.payload
  }),
  FOO: (state,action) => ({
    stringData: 'foo'
  }),
  GET_INIT_DATA: (state, action) => ({
    authors: author,
    comments,
    posts: post,
  })
}, { stringData: 'MUU' });

export default reducer;