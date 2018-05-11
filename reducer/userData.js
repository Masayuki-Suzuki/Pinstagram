import {handleActions} from "redux-actions";

const userData = handleActions(
  {
    INIT_USER_DATA: state => ({
      ...state,
      id: '',
      userName: '',
    }),
    RECEIVE_USER_DATA_SUCCEEDED: (state, action) => ({
      ...state,
      id: action.payload.id,
      userName: action.payload.userName,
    }),
  },
  {
    id: '',
    userName: '',
  },
)

export default userData