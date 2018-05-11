import { handleActions } from 'redux-actions'

const formInputData = handleActions(
  {
    INIT_FORM_DATA: state => ({
      ...state,
      email: '',
      userName: '',
    }),
    SAVE_INPUT_EMAIL: (state, action) => ({
      ...state,
      email: action.payload.email
    }),
    SAVE_INPUT_USER: (state, action) => ({
      ...state,
      userName: action.payload.userName
    }),
    SAVE_FORM_DATA: (state, action) => ({
      ...state,
      email: action.payload.email,
      userName: action.payload.userName,
    }),
  },
  {
    email: '',
    userName: '',
  },
)

export default formInputData
