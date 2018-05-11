import {handleActions} from "redux-actions";

const fetchingData = handleActions(
  {
    NOW_FETCHING_DATA: state => ({
      ...state,
      isFetch: true,
    }),
    NOT_FETCHING_DATA: state => ({
      ...state,
      isFetch: false,
    }),
  },
  { isFetch: false },
)

export default fetchingData