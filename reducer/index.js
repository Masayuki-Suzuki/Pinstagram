import { handleActions } from "redux-actions";

const reducer = handleActions({
  CHANGE_STRING: (state, action) => ({
    stringData: action.payload
  }),
  FOO: (state,action) => ({
    stringData: 'foo'
  })
}, { stringData: 'MUU' });

export default reducer;