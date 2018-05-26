import React from 'react'
import FormOverlay from './formOverlay'
import { emailInputHandler } from '../handlers/loginFormHandlers'
import submitHandler from './submitHandler'

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
