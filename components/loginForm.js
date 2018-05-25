import React from 'react'
import axios from 'axios'
import FormOverlay from './formOverlay'
import { emailInputHandler } from '../handlers/loginFormHandlers'
import { LOGIN_URL } from '../store/defineVariables'
import submitHandler from './submitHandler'

// const submitLogInHandler = async (e, {
//   fetchUserActions, formActions, fetchControl, formData, formInputData,
// }) => {
//   // stop default form action
//   e.preventDefault()
//   e.stopPropagation()
//   // get and save data from sing up form.
//   const passTag = [...e.target.children].slice(-2, -1)[0]
//   const { email } = formInputData
//   const pass = passTag.firstChild.value
//   const jsonWebToken = sessionStorage.getItem('jwt') || null
//   console.log(jsonWebToken)
//   // hide sign up form
//   formActions.closeForm()
//   // show loading view
//   fetchControl.onFetching()
//   const res = await axios.post(LOGIN_URL, { email, pass, jsonWebToken }).catch((err) => {
//     formActions.failedLogin()
//     // hide loading view
//     fetchControl.endFetching()
//     // show sing up form
//     formActions.openLoginForm()
//     // dump error message for console
//     console.error(err)
//     throw new Error(err)
//   })
//   // If logged in.
//   const { jsonWebToken: jwt, userName: loginUser, id } = res.data
//   // save jwt to session storage
//   sessionStorage.setItem('jwt', jwt)
//   fetchUserActions.succeededFetchUserData(id, loginUser)
//   // Clear form
//   formData.clearForm()
//   // hide loading view
//   fetchControl.endFetching()
// }

const LoginError = ({ formControl }) =>
  (formControl.loginError ? (
    <p className="errorMassage">
      Your email address or password is incorrect.<br />Please check them and try again.
    </p>
  ) : null)

const LoginForm = (props) => {
  const { formData, formInputData, formControl } = props
  return (
    <FormOverlay {...props}>
      <h2 className="formOverlay__heading">Login to share photos</h2>
      <h3 className="formOverlay__subheading">Find new ideas to try</h3>
      <p className="formOverlay__lead">Log in to share photos from friends and</p>
      <p className="formOverlay__lead">discover other accounts you&lsquo;ll love.</p>
      <form onSubmit={e => submitHandler(e, { ...props })} className="formOverlay__main">
        <LoginError formControl={formControl} />
        <label className="formOverlay__elm" htmlFor="formOverlay__email">
          <input id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" value={formInputData.email} onChange={e => emailInputHandler(e, formData)} required />
        </label>
        <label className="formOverlay__elm" htmlFor="formOverlay__pass">
          <input id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" required />
        </label>
        <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Log in</button>
      </form>
    </FormOverlay>
  )
}

export default LoginForm
