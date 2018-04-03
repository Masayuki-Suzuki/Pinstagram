import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'
import { addLike, getInitData, showLogInForm } from '../actions/createActions'
import Layout from '../components/layout'
import Posts from '../components/posts'
import LoginForm from '../components/loginForm'

/* eslint 'react/prefer-stateless-function': 0 */
class Page extends Component {
  static async getInitialProps({
    store, isServer, pathname, query,
  }) {
    store.dispatch(getInitData())
    return {
      custom: 'custom',
    }
  }
  render() {
    const RenderLoginForm = ({ isLogIn }) => (!isLogIn ? null : <LoginForm />)
    return (
      <Layout>
        <Posts posts={this.props.postData} clickLikeBtn={this.props.clickLikeBtn} />
        <RenderLoginForm />
      </Layout>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  const clickLikeBtn = () => {
    dispatch(addLike())
  }
  const openLoginForm = () => {
    dispatch(showLogInForm())
  }
  return {
    dispatch,
    clickLikeBtn,
    openLoginForm,
  }
}

/* eslint no-class-assign: 0 */
Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
