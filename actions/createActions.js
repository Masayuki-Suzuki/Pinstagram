import { createAction } from 'redux-actions'

//
export const getInitData = createAction('GET_INIT_DATA')
export const addLike = createAction('ADD_LIKE')

// Form Actions
export const showSignUpForm = createAction('SHOW_SIGNUP_FORM')
export const showLogInForm = createAction('SHOW_LOGIN_FORM')
export const hiddenForm = createAction('HIDDEN_FORM')
export const requestLogin = createAction('REQUEST_LOGIN')

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

// Search
export const searchPostData = createAction('SEARCH_POST_DATA', (text = '') => ({ text }))
