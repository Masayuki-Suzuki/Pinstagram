import { handleActions } from 'redux-actions'

const formInputData = handleActions(
  {
    INIT_FORM_DATA: state => ({
      ...state,
      email: '',
      userName: '',
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
