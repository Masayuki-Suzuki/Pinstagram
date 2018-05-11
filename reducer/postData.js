import { handleActions } from 'redux-actions'
import posts from "../components/seed";

const postData =  handleActions(
  {
    GET_INIT_DATA: () => ({
      posts,
    }),
    ADD_LIKE: state => state,
  },
  {
    posts: [],
  },
)

export default postData