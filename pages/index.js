import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/storeCreater'

import {
  addLike,
  existingEmail,
  existingUserName,
  nowFetchingData,
  getInitData,
  getLoginEmail,
  getLoginPass,
  hiddenForm,
  initForm,
  initLoginForm,
  initUserData,
  noFetchingData,
  receiveUserDataSuceeded,
  searchPostData,
  showLogInForm,
  showSignUpForm,
  initFormData,
  saveFormData,
  saveInputEmail,
  saveInputUser,
} from '../actions/createActions'

import Layout from '../components/layout'
import Posts from '../components/posts'
import RenderLoginForm from '../components/renderLoginForm'
import RenderSignUpForm from '../components/renderSignUpForm'
import Loading from '../components/loading'

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
        <Loading {...this.props} />
      </Layout>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  const clickLikeBtn = () => {
    dispatch(addLike())
  }
  // For SignUp & Login Form
  const initializeForm = () => {
    dispatch(initForm())
  }
  const openLoginForm = () => {
    dispatch(showLogInForm())
  }
  const openSignUpForm = () => {
    dispatch(showSignUpForm())
  }
  const closeForm = () => {
    dispatch(hiddenForm())
  }
  const existUser = () => {
    dispatch(existingUserName())
  }
  const existEmail = () => {
    dispatch(existingEmail())
  }
  // Sign Up & Login handler
  // Maybe unnecessary
  const clearLoginForm = () => {
    dispatch(initLoginForm())
  }
  const onChangeEmail = (val) => {
    dispatch(getLoginEmail(val))
  }
  const onChangePass = (val) => {
    dispatch(getLoginPass(val))
  }
  // Fetch user data
  const clearUserData = () => {
    dispatch(initUserData())
  }
  const onFetching = () => {
    console.log('here')
    dispatch(nowFetchingData())
  }
  const endFetching = () => {
    dispatch(noFetchingData())
  }
  const succeededFetchUserData = (id, userName) => {
    dispatch(receiveUserDataSuceeded(id, userName))
  }
  // For search input box in Header
  const onChangeSearchBox = (text) => {
    dispatch(searchPostData(text))
  }

  // Form input data control
  const clearForm = () => {
    dispatch(initFormData())
  }
  const saveEmail = (email) => {
    dispatch(saveInputEmail(email))
  }
  const saveUser = (user) => {
    dispatch(saveInputUser(user))
  }
  const saveForm = (email, user) => {
    dispatch(saveFormData(email, user))
  }
  return {
    formActions: {
      initializeForm,
      openLoginForm,
      openSignUpForm,
      closeForm,
      existUser,
      existEmail,
    },
    loginActions: {
      clearLoginForm,
      onChangeEmail,
      onChangePass,
    },
    fetchUserActions: {
      clearUserData,
      succeededFetchUserData,
    },
    fetchControl: {
      onFetching,
      endFetching,
    },
    formData: {
      clearForm,
      saveEmail,
      saveUser,
      saveForm,
    },
    clickLikeBtn,
    onChangeSearchBox,
  }
}

/* eslint-disable no-class-assign */
Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page)

export default Page
