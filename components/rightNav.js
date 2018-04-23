import React from 'react'
import { branch, renderComponent } from 'recompose'

const RenderFormBtn = ({ openLoginForm, openSignUpForm }) => (
  <div className="authBtn">
    <button className="cmnBtn cmnBtn--dbl" onClick={() => openSignUpForm()}>Sign Up</button>
    <button className="cmnBtn" onClick={() => openLoginForm()} >Log In</button>
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

const switchNav = branch(
  isLogedIn,
  renderComponent(RenderUser),
  component => component,
)

export default switchNav(RenderFormBtn)
