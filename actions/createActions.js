import { createAction } from 'redux-actions'

export const getInitData = createAction('GET_INIT_DATA')
export const addLike = createAction('ADD_LIKE')

export const showSignUpForm = createAction('SHOW_SIGNUP_FORM', (isSignUp = false) => ({ isSignUp }))
export const showLogInForm = createAction('SHOW_LOGIN_FORM', (isLogIn = false) => ({ isLogIn }))
