import React from 'react'
import FormOverlay from './formOverlay'
import { emailInputHandler, userNameInputHandler } from '../handlers/loginFormHandlers'
import submitHandler from './submitHandler'

const EmailError = ({ formControl }) => (formControl.existingEmail ? <p className="errorMassage">Your email address is already existing.</p> : null)
const UserError = ({ formControl }) => (formControl.existingUser ? <p className="errorMassage">Your user name is already existing.</p> : null)

const SingUpForm = (props) => {
  const { formData, formInputData } = props
  return (
    <FormOverlay {...props}>
      <h2 className="formOverlay__heading">Welcome to Pinstagram</h2>
      <h3 className="formOverlay__subheading">Sign up to share photos</h3>
      <p className="formOverlay__lead">Free, unlimited access to content</p>
      <p className="formOverlay__lead">Discover other accounts you&lsquo;ll love and new idea</p>
      <form onSubmit={e => submitHandler(e, { ...props }, true)} className="formOverlay__main">
        <EmailError {...props} />
        <label className="formOverlay__elm" htmlFor="formOverlay__email">
          <input id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" value={formInputData.email} onChange={e => emailInputHandler(e, formData)} required />
        </label>
        <UserError {...props} />
        <label className="formOverlay__elm" htmlFor="formOverlay__userName">
          <input type="text" id="formOverlay__userName" className="formOverlay__input" placeholder="User name" value={formInputData.userName} onChange={e => userNameInputHandler(e, formData)} required />
        </label>
        <label className="formOverlay__elm" htmlFor="formOverlay__pass">
          <input id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" required />
        </label>
        <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Sign Up</button>
      </form>
    </FormOverlay>
  )
}

export default SingUpForm
