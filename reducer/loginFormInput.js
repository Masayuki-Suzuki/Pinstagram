import {handleActions} from "redux-actions";

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

export default loginFormInput