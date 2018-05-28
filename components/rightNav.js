import React from 'react'
import { branch, renderComponent } from 'recompose'
import sendJsonWebToken from './sendJsonWebToken'

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
  const { fetchUserActions, fetchControl, formActions } = props
  const jwt = sessionStorage.getItem('jwt') || null
  if (jwt) {
    fetchControl.onFetching()
    await sendJsonWebToken(fetchUserActions, fetchControl, formActions, jwt)
    // hide loading view
    fetchControl.endFetching()
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
      <button className="cmnBtn" onClick={() => navLoginHandler(props)}>
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
