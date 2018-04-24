import React from 'react'
import FormOverlay from './formOverlay'

const LoginForm = props => (
  <FormOverlay {...props}>
    <h2 className="formOverlay__heading">Login to share photos</h2>
    <h3 className="formOverlay__subheading">Find new ideas to try</h3>
    <p className="formOverlay__lead">Log in to share photos from friends and</p>
    <p className="formOverlay__lead">discover other accounts you&lsquo;ll love.</p>
    <form className="formOverlay__main">
      <label className="formOverlay__elm" htmlFor="formOverlay__email">
        <input onChange={e => props.loginActions.onChangeEmail(e.target.value)} id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" />
      </label>
      <label className="formOverlay__elm" htmlFor="formOverlay__pass">
        <input onChange={e => props.loginActions.onChangePass(e.target.value)} id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" />
      </label>
      <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Log in</button>
    </form>
  </FormOverlay>
)

export default LoginForm
