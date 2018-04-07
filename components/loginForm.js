import React from 'react'

const LoginForm = ({ formControl }) => {
  if (formControl.isLogIn) {
    return (
      <div className="loginForm">
        <div className="loginForm__logo">
          <img src="/img/pinstagram-icon.svg" alt={formControl.isLogIn} />
        </div>
        <h2 className="loginForm__heading">Login to see and share photos</h2>
        <form className="login">
          <label htmlFor="login__email">
            <input id="login__email" type="email" placeholder="Email" />
          </label>
          <label htmlFor="login__">
            <input id="login__email" type="email" placeholder="Create password" />
          </label>
          <button>Log in</button>
        </form>
        <p>{formControl.text}</p>
      </div>
    )
  }
  return null
}


export default LoginForm
