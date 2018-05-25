import { createAction } from 'redux-actions'

export const getInitData = createAction('GET_INIT_DATA')
export const addLike = createAction('ADD_LIKE')

// Form Actions
export const initForm = createAction('INIT_FOMR')
export const showSignUpForm = createAction('SHOW_SIGNUP_FORM')
export const showLogInForm = createAction('SHOW_LOGIN_FORM')
export const hiddenForm = createAction('HIDDEN_FORM')
export const existingUserName = createAction('EXISTING_USER_NAME')
export const existingEmail = createAction('EXISTING_EMAIL')
export const loginError = createAction('LOGIN_ERROR')
export const requestLogin = createAction('REQUEST_LOGIN')

// Form input data
export const initFormData = createAction('INIT_FORM_DATA')
export const saveInputEmail = createAction('SAVE_INPUT_EMAIL', (email = '') => ({ email }))
export const saveInputUser = createAction('SAVE_INPUT_USER', (userName = '') => ({ userName }))
export const saveFormData = createAction('SAVE_FORM_DATA', (email = '', userName = '') => ({ email, userName }))

// Sign up & Login Form Actions
export const initLoginForm = createAction('INIT_LOGIN_FORM')
export const getLoginEmail = createAction('GET_LOGIN_EMAIL', (email = '') => ({ email }))
export const getLoginPass = createAction('GET_LOGIN_PASS', (password = '') => ({ password }))

// Fetch User Data
export const initUserData = createAction('INIT_USER_DATA')
export const requestUserData = createAction('REQUEST_USER_DATA')
export const receiveUserDataSuceeded = createAction('RECEIVE_USER_DATA_SUCCEEDED', (id = '', userName = '') => ({ id, userName }))
export const receiveUserDataFailed = createAction('RECEIVE_USER_DATA_FAILED')

// Fetch flag
export const nowFetchingData = createAction('NOW_FETCHING_DATA')
export const noFetchingData = createAction('NOT_FETCHING_DATA')

// Search
export const searchPostData = createAction('SEARCH_POST_DATA', (text = '') => ({ text }))
