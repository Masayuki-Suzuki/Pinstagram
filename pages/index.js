import React from 'react'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'
import { getInitData } from '../actions/createActions'
import Layout from '../components/layout'
import Posts from '../components/posts'

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

const mapStateToProps = state => ({
  authors: state.authors,
  comments: state.comments,
  posts: state.posts,
})

const mapDispatchToProps = (dispatch) => {
  const onSubmit = () => {
    // nothing to do
  }
  return {
    onSubmit,
    dispatch,
  }
}

Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
