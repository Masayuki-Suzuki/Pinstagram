import { handleActions } from 'redux-actions'
import authors from '../components/seed_authors'
import comments from '../components/seed_comments'
import posts from '../components/seed'

const reducer = handleActions(
  {
    GET_INIT_DATA: () => ({
      authors,
      comments,
      posts,
    }),
    ADD_LIKE: () => {
      console.log('click!!')
    },
  },
  {
    authors: [],
    comments: [],
    posts: [],
  },
)

export default reducer
