import React from 'react'
import FormOverlay from './formOverlay'

const LoginForm = ({ closeForm }) => (
  <FormOverlay closeForm={closeForm}>
    <h2 className="formOverlay__heading">Login to share photos</h2>
    <h3 className="formOverlay__subheading">Find new ideas to try</h3>
    <p className="formOverlay__lead">Log in to share photos from friends and</p>
    <p className="formOverlay__lead">discover other accounts you&lsquo;ll love.</p>
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
