import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import posts from '../components/seed'

const getInitialData = handleActions(
  {
    GET_INIT_DATA: () => ({
      posts,
    }),
  },
  {
    posts: [],
  },
)

const formControl = handleActions({
  SHOW_SIGNUP_FORM: state => ({
    ...state,
    isSignUp: true,
  }),
  SHOW_LOGIN_FORM: state => ({
    ...state,
    isLogIn: true,
  }),
}, { isSignUp: false, isLogIn: false })


const reducer = combineReducers({
  getInitialData,
  formControl,
})

export default reducer
