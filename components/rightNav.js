import React from 'react'
import { branch, renderComponent } from 'recompose'

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

const RenderUser = ({ userData }) => (
  <div className="userInfo">
    <p className="user">Welcome! {userData.userName}!</p>
  </div>
)

const isLogedIn = ({ userData }) => {
  if (userData.id) {
    return true
  }
  return false
}

const switchNav = branch(isLogedIn, renderComponent(RenderUser), component => component)

export default switchNav(RenderFormBtn)
