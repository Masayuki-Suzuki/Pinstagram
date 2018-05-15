import React from 'react'
import { branch, renderComponent } from 'recompose'

const logOutHandler = async (fetchUserActions, fetchControl) => {
  fetchControl.onFetching()
  await setTimeout(
    ((fetchUserActions) => {
      console.log(fetchUserActions)
      sessionStorage.removeItem('jwt')
      fetchUserActions.clearUserData()
    }).bind(fetchUserActions, fetchUserActions),
    1000,
  )
  fetchControl.endFetching()
}

const RenderFormBtn = ({ formActions }) => (
  <div className="authBtn">
    <button className="cmnBtn cmnBtn--dbl" onClick={() => formActions.openSignUpForm()}>
      Sign Up
    </button>
    <button className="cmnBtn" onClick={() => formActions.openLoginForm()}>
      Log In
    </button>
  </div>
)

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

const isLoggedIn = () => {
  if (sessionStorage.jwt) {
    return true
  }
  return false
}

const switchNav = branch(isLoggedIn, renderComponent(RenderUser), component => component)

export default switchNav(RenderFormBtn)
