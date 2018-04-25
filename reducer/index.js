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
      id: '',
      userName: '',
      isFetch: false,
    }),
    REQUEST_USER_DATA: state => ({
      ...state,
      isFetch: true,
    }),
    RECEIVE_USER_DATA_SUCCEEDED: (state, action) => ({
      ...state,
      isFetch: false,
      id: action.payload.id,
      userName: action.payload.userName,
    }),
    RECEIVE_USER_DATA_FAILED: state => ({
      ...state,
      isFetch: false,
    }),
  },
  {
    id: '',
    userName: '',
    isFetch: false,
  },
)

const formControl = handleActions(
  {
    INIT_FOMR: state => ({
      ...state,
      isSignUp: false,
      isLogIn: false,
      existingUser: false,
      existingEmail: false,
    }),
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
      existingUser: false,
      existingEmail: false,
    }),
    EXISTING_USER_NAME: state => ({
      ...state,
      existingUser: true,
    }),
    EXISTING_EMAIL: state => ({
      ...state,
      existingEmail: true,
    }),
  },
  {
    isSignUp: false,
    isLogIn: false,
    existingUser: false,
    existingEmail: false,
  },
)

const loginFormInput = handleActions(
  {
    INIT_LOGIN_FORM: state => ({
      ...state,
      email: '',
      password: '',
    }),
    GET_LOGIN_EMAIL: (state, action) => ({
      ...state,
      email: action.payload.email,
    }),
    GET_LOGIN_PASS: (state, action) => ({
      ...state,
      password: action.payload.password,
    }),
  },
  { email: '', password: '' },
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
  loginFormInput,
  userData,
  searchPost,
})

export default reducer
