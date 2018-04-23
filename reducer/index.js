import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import posts from '../components/seed'

const postData = handleActions(
  {
    GET_INIT_DATA: () => ({
      posts,
    }),
    ADD_LIKE: state => state,
  },
  {
    posts: [],
  },
)

const userData = handleActions(
  {
    INIT_USER_DATA: state => ({
      ...state,
      userName: '',
      email: '',
    }),
    REQUEST_USER_DATA: state => ({
      ...state,
      isFetch: true,
    }),
    RECEIVE_USER_DATA_SUCCEEDED: (state, action) => ({
      ...state,
      isFetch: false,
      userName: action.payload.userName,
      email: action.payload.email,
    }),
    RECEIVE_USER_DATA_FAILED: state => ({
      ...state,
      isFetch: false,
    }),
  },
  {
    id: '',
    userName: '',
    email: '',
    isFetch: false,
  },
)

const formControl = handleActions(
  {
    SHOW_SIGNUP_FORM: state => ({
      ...state,
      isSignUp: true,
      isLogIn: false,
    }),
    SHOW_LOGIN_FORM: state => ({
      ...state,
      isLogIn: true,
      isSignUp: false,
    }),
    HIDDEN_FORM: state => ({
      ...state,
      isSignUp: false,
      isLogIn: false,
    }),
  },
  { isSignUp: false, isLogIn: false },
)

const searchPost = handleActions(
  {
    SEARCH_POST_DATA: (state, action) => ({
      ...state,
      text: action.payload.text,
    }),
  },
  { text: '' },
)

const reducer = combineReducers({
  postData,
  formControl,
  userData,
  searchPost,
})

export default reducer
