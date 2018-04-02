import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'
import { getInitData } from '../actions/createActions'
import Layout from '../components/layout'
import Posts from '../components/posts'

/* eslint 'import/no-mutable-exports': 0 */
// let Page = props => (
//   <Layout>
//     <Posts rootProps={props} />
//   </Layout>
// )

/* eslint 'react/prefer-stateless-function': 0 */
class Page extends Component {
  static async getInitialProps({
    store,
    isServer,
    pathname,
    query
  }) {
    store.dispatch(getInitData())
    return {
      custom: 'custom',
    }
  }
  render() {
    return (
      <Layout>
        <Posts rootProps={this.props} />
      </Layout>
    )
  }
}

// Page.getInitialProps = () => {
//   store.dispatch(getInitData())
// }

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  const clickLikeBtn = () => {
    console.log('click like button')
  }
  return {
    dispatch,
    clickLikeBtn,
  }
}

/* eslint no-class-assign: 0 */
Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
