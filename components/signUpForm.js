import React from 'react'
import FormOverlay from './formOverlay'

const SingUpForm = ({ closeForm }) => (
  <FormOverlay closeForm={closeForm}>
    <h2 className="formOverlay__heading">Welcome to Pinstagram</h2>
    <h3 className="formOverlay__subheading">Sign up to share photos</h3>
    <p className="formOverlay__lead">Free, unlimited access to content</p>
    <p className="formOverlay__lead">Discover other accounts you&lsquo;ll love and new idea</p>
    <form className="formOverlay__main">
      <label className="formOverlay__elm" htmlFor="formOverlay__email">
        <input id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" />
      </label>
      <label className="formOverlay__elm" htmlFor="formOverlay__pass">
        <input id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" />
      </label>
      <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Continue</button>
    </form>
  </FormOverlay>
)

export default SingUpForm
