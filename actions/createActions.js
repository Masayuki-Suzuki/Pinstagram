import { createAction } from 'redux-actions'

//
export const getInitData = createAction('GET_INIT_DATA')
export const addLike = createAction('ADD_LIKE')

// Form Actions
export const showSignUpForm = createAction('SHOW_SIGNUP_FORM', (isSignUp = false) => ({ isSignUp }))
export const showLogInForm = createAction('SHOW_LOGIN_FORM', (isLogIn = false) => ({ isLogIn }))
export const hiddenForm = createAction('HIDDEN_FORM', (isSignUp = false, isLogIn = false) => ({
  isSignUp,
  isLogIn,
}))

export const requestLogin = createAction('REQUEST_LOGIN', (isLogIn = false, isFetch = true) => ({
  isLogIn,
  isFetch,
}))

// Fetch User Data
export const initUserData = createAction('INIT_USER_DATA')
export const requestUserData = createAction(
  'REQUEST_USER_DATA',
  (userName = '', email = '', isFetch = true) => ({ userName, email, isFetch }),
)
export const receiveUserDataSuceeded = createAction(
  'RECEIVE_USER_DATA_SUCCEEDED',
  (userName = '', email = '', isFetch = false) => ({ userName, email, isFetch }),
)
export const receiveUserDataFailed = createAction(
  'RECEIVE_USER_DATA_FAILED',
  (isFetch = false) => ({ isFetch }),
)
