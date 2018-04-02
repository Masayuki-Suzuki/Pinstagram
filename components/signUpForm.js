import React from 'react'

const SingUpForm = (props) => {
  const a = 0
  return (
    <div className="signUpForm">
      <div className="signUpForm__logo">
        <img src="/img/pinstagram-icon.svg" alt="Pinstagram" />
      </div>
      <h2 className="loginFrom__heading">Sign up to see photos</h2>
      <p className="signUpForm__lead">Free, unlimited access to content</p>
      <p className="signUpForm__lead">Discover ather accounts you&lsquo;ll love and new idea</p>
      <form className="signUp">
        <label htmlFor="signUp__email">
          <input id="signUp__email" type="email" placeholder="Email" />
        </label>
        <label htmlFor="signUp__pass">
          <input id="signUp__pass" type="password" placeholder="Create password" />
        </label>
        <button>Continue</button>
      </form>
    </div>
  )
}

export default SingUpForm
