import { handleActions } from 'redux-actions'

export default handleActions({
  INIT_LOADING: state => ({
    ...state,
    isLoading: true,
  }),
  CLOSE_LOADING: state => ({
    ...state,
    isLoading: false
  })
}, { isLoading: true})