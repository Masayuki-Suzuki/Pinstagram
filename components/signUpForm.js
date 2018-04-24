import React from 'react'
import axios from 'axios'
import FormOverlay from './formOverlay'
import { SIGN_UP_URL } from '../store/defineVariables'

const submitSignUpHandler = async (e, fetchUserActions, loginFormInput) => {
  const email = e.target.firstChild.firstChild.value
  const userName = e.target.children[1].firstChild.value
  const pass = e.target.children[2].firstChild.value
  e.preventDefault()
  e.stopPropagation()
  e.target.firstChild.firstChild.value = ''
  e.target.children[1].firstChild.value = ''
  e.target.children[2].firstChild.value = ''
  const res = await axios.post(SIGN_UP_URL, { email, userName, pass }).catch((err) => {
    fetchUserActions.failedFetchUserData(err)
    throw new Error(err)
  })
  console.log('Maybe posted.')
}

const SingUpForm = props => (
  <FormOverlay {...props}>
    <h2 className="formOverlay__heading">Welcome to Pinstagram</h2>
    <h3 className="formOverlay__subheading">Sign up to share photos</h3>
    <p className="formOverlay__lead">Free, unlimited access to content</p>
    <p className="formOverlay__lead">Discover other accounts you&lsquo;ll love and new idea</p>
    <form onSubmit={e => submitSignUpHandler(e, props.fetchUserActions, props.loginFormInput)} className="formOverlay__main">
      <label className="formOverlay__elm" htmlFor="formOverlay__email">
        <input id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" />
      </label>
      <label className="formOverlay__elm" htmlFor="formOverlay__userName">
        <input type="text" id="formOverlay__userName" className="formOverlay__input" placeholder="User name" />
      </label>
      <label className="formOverlay__elm" htmlFor="formOverlay__pass">
        <input id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" />
      </label>
      <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Sign Up</button>
    </form>
  </FormOverlay>
)

export default SingUpForm
