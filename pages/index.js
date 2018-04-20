import React, { Component } from 'react'
import branch from 'recompose/branch'
import renderNothing from 'recompose/renderNothing'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'
import {
  addLike,
  getInitData,
  searchPostData,
  showLogInForm,
  showSignUpForm,
} from '../actions/createActions'
import Layout from '../components/layout'
import Posts from '../components/posts'
import LoginForm from '../components/loginForm'

const isOpenLoginForm = (formControl) => {
  console.log(formControl)
  if (formControl.isLogIn) {
    return true
  }
  return false
}

const withLoginFormCheck = branch(
  ({ formControl }) => isOpenLoginForm(formControl),
  component => component,
  renderNothing,
)

const RenderLoginForm = withLoginFormCheck(LoginForm)

/* eslint 'react/prefer-stateless-function': 0 */
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
      <Layout
        userData={this.props.userData}
        searchPost={this.props.searchPost}
        openLoginForm={this.props.openLoginForm}
        onChangeSearchBox={this.props.onChangeSearchBox}
        dispatch={this.props.dispatch}
      >
        <Posts posts={this.props.postData} clickLikeBtn={this.props.clickLikeBtn} />
        <RenderLoginForm {...this.props} />
      </Layout>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  const clickLikeBtn = () => {
    dispatch(addLike())
  }
  const openLoginForm = (flag, text) => {
    dispatch(showLogInForm(flag, text))
  }
  const openSignInForm = () => {
    dispatch(showSignUpForm())
  }
  const onChangeSearchBox = (text) => {
    dispatch(searchPostData(text))
  }
  return {
    dispatch,
    clickLikeBtn,
    openLoginForm,
    openSignInForm,
    onChangeSearchBox,
  }
}

/* eslint no-class-assign: 0 */
Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
