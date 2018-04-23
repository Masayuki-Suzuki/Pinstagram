import React from 'react'
import FormOverlay from './formOverlay'

const LoginForm = ({ closeForm }) => (
  <FormOverlay closeForm={closeForm}>
    <h2 className="formOverlay__heading">Login to see and share photos</h2>
    <form className="formOverlay__main">
      <label className="formOverlay__elm" htmlFor="formOverlay__email">
        <input id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" />
      </label>
      <label className="formOverlay__elm" htmlFor="formOverlay__pass">
        <input id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" />
      </label>
      <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Log in</button>
    </form>
  </FormOverlay>
)

export default LoginForm
