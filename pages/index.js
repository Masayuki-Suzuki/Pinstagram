import React from 'react'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'
import { getInitData, addLike } from '../actions/createActions'
import Layout from '../components/layout'
import Posts from '../components/posts'
import posts from '../components/seed'
import comments from '../components/seed_comments'
import authors from '../components/seed_authors'

let Page = props => (
  <Layout>
    <Posts rootProps={props} />
  </Layout>
)

Page.getInitialProps = ({
  store, isServer, pathname, query,
}) => {
  store.dispatch(getInitData())
}

const clickLikeBtn = (dispatch) => {
  dispatch(addLike())
}

const mapStateToProps = state => ({
  authors,
  comments,
  posts,
})

const mapDispatchToProps = (dispatch, store) => ({
  clickLikeBtn: new clickLikeBtn(dispatch),
})

Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
