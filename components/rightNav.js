import React from 'react'
import { branch, renderComponent } from 'recompose'
import axios from 'axios/index'
import { LOGIN_URL } from '../store/defineVariables'

const logOutHandler = async (fetchUserActions, fetchControl) => {
  fetchControl.onFetching()
  // Delete user data and JSON Web Token after display the loading view 1 sec because deleting data is so fast.
  await new Promise(resolve => setTimeout(resolve, 1000))
  // Doesn't clear json web token because a user might login again.
  // sessionStorage will be cleared after closed the tab or window.
  // sessionStorage.removeItem('jwt')
  fetchUserActions.clearUserData()
  fetchControl.endFetching()
}

const navLoginHandler = async (props) => {
  const {
    fetchUserActions, formActions, fetchControl, formData, formInputData,
  } = props
  const jwt = sessionStorage.getItem('jwt') || null
  if (jwt) {
    fetchControl.onFetching()
    const res = await axios.post(LOGIN_URL, { jsonWebToken: jwt }).catch((err) => {
      console.log('Json web token was invalid token.')
      // If JSON Web Token was invalid, open login form like the first login.
      props.formActions.openLoginForm()
      return false
    })
    console.log('here')
    // If server response wasn't error
    if (!res.data.error) {
      const { userName: loginUser, id } = res.data
      // save id and username to state
      fetchUserActions.succeededFetchUserData(id, loginUser)
      // delay at least 1 sec.
      await new Promise(resolve => setTimeout(resolve, 1000))
      // hide loading view
      fetchControl.endFetching()
    }
  } else {
    props.formActions.openLoginForm()
  }
}

const RenderFormBtn = (props) => {
  const { formActions } = props
  return (
    <div className="authBtn">
      <button className="cmnBtn cmnBtn--dbl" onClick={() => formActions.openSignUpForm()}>
        Sign Up
      </button>
      <button className="cmnBtn" onClick={e => navLoginHandler(e, props)}>
        Log In
      </button>
    </div>
  )
}

const RenderUser = ({ userData, fetchUserActions, fetchControl }) => (
  <ul className="userInfo">
    <li className="user">{userData.userName}</li>
    <li className="logOut">
      <button className="cmnBtn" onClick={() => logOutHandler(fetchUserActions, fetchControl)}>
        Log Out
      </button>
    </li>
  </ul>
)

const isLoggedIn = ({ userData }) => {
  if (userData.id) {
    return true
  }
  return false
}

const switchNav = branch(isLoggedIn, renderComponent(RenderUser), component => component)

export default switchNav(RenderFormBtn)
