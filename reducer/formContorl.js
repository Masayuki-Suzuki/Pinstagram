import {handleActions} from "redux-actions";

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

export default formControl