import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'

import {
  addLike,
  getInitData,
  hiddenForm,
  searchPostData,
  showLogInForm,
  showSignUpForm,
} from '../actions/createActions'

import Layout from '../components/layout'
import Posts from '../components/posts'
import RenderLoginForm from '../components/renderLoginForm'
import RenderSignUpForm from '../components/renderSignUpForm'

/* eslint-disable react/prefer-stateless-function */
class Page extends Component {
  static async getInitialProps({
    store, isServer, pathname, query,
  }) {
    store.dispatch(getInitData())
    return {
      initState: store.getState(),
    }
  }
  render() {
    return (
      <Layout {...this.props}>
        <Posts posts={this.props.postData} clickLikeBtn={this.props.clickLikeBtn} />
        <RenderLoginForm {...this.props} />
        <RenderSignUpForm {...this.props} />
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
  const openSignUpForm = () => {
    dispatch(showSignUpForm())
  }
  const closeForm = (e) => {
    if (e.target.classList.contains('formOverlay') || e.target.classList[0].startsWith('closeBtn')) {
      dispatch(hiddenForm())
    }
  }
  const onChangeSearchBox = (text) => {
    dispatch(searchPostData(text))
  }
  return {
    clickLikeBtn,
    openLoginForm,
    openSignUpForm,
    closeForm,
    onChangeSearchBox,
  }
}

/* eslint-disable no-class-assign */
Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
