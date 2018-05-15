import React from 'react'
import { branch, renderComponent } from 'recompose'

const clearUserData = fetchUserActions =>
  new Promise((fetchUserActions) => {
    setTimeout((fetchUserActions) => {
      console.log(fetchUserActions)
      sessionStorage.removeItem('jwt')
      fetchUserActions.clearUserData()
    }, 1000)
  })

const logOutHandler = async (fetchUserActions, fetchControl) => {
  fetchControl.onFetching()
  setTimeout(() => {
    console.log(fetchUserActions)
    sessionStorage.removeItem('jwt')
    fetchUserActions.clearUserData()
    fetchControl.endFetching()
  }, 1000)
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

const isLoggedIn = ({ userData }) => {
  if (userData.id) {
    return true
  }
  return false
}

const switchNav = branch(isLoggedIn, renderComponent(RenderUser), component => component)

export default switchNav(RenderFormBtn)
