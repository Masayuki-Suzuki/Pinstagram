import React from 'react'
import axios from 'axios'
import FormOverlay from './formOverlay'
import { SIGN_UP_URL } from '../store/defineVariables'

const submitSignUpHandler = async (e, fetchUserActions, formActions, fetchControl, formData) => {
  // get and save data from sing up form.
  const target = e.target
  const email = target.firstChild.firstChild.value
  const userName = target.children[1].firstChild.value
  const pass = target.children[2].firstChild.value
  formData.saveForm(email, userName)
  // stop default form action
  e.preventDefault()
  e.stopPropagation()
  // hide sign up form
  formActions.closeForm()
  // show loading view
  fetchControl.onFetching()
  // post new user data
  const res = await axios.post(SIGN_UP_URL, { email, userName, pass }).catch((err) => {
    // If server responded error code,
    const { existUserName, existEmail } = err.response.data
    if (existUserName) {
      // show error message for user name
      formActions.existUser(existUserName)
    }
    if (existEmail) {
      // show error message for email address
      formActions.existEmail(existEmail)
    }
    // hide loading view
    fetchControl.endFetching()
    // show sing up form
    formActions.openSignUpForm()
    // dump error message for console
    console.error(err)
    throw new Error(err)
  })
  // If sign up is validated.
  const { jsonWebToken: jwt, userName: loginUser, id } = res.data
  // save jwt to session storage
  sessionStorage.setItem('jwt', jwt)
  fetchUserActions.suceededFetchUserData(id, loginUser)
  // Clear form
  formData.clearForm()
  // hide loading view
  fetchControl.endFetching()
}

const formHandler = (e, formData) => {
  console.log(e.target)
  const target = e.target.parentElement.parentElement
  const email = target.firstChild.firstChild.value
  const userName = target.children[1].firstChild.value
  formData.saveForm(email, userName)
}

const EmailError = ({ formControl }) => (formControl.existingEmail ? <p className="errorMassage">Your email address is already existing.</p> : null)
const UserError = ({ formControl }) => (formControl.existingUser ? <p className="errorMassage">Your user name is already existing.</p> : null)

const SingUpForm = (props) => {
  const {
    fetchUserActions, formActions, fetchControl, formData, formInputData,
  } = props
  return (
    <FormOverlay {...props}>
      <h2 className="formOverlay__heading">Welcome to Pinstagram</h2>
      <h3 className="formOverlay__subheading">Sign up to share photos</h3>
      <p className="formOverlay__lead">Free, unlimited access to content</p>
      <p className="formOverlay__lead">Discover other accounts you&lsquo;ll love and new idea</p>
      <form onSubmit={e => submitSignUpHandler(e, fetchUserActions, formActions, fetchControl, formData)} className="formOverlay__main">
        <label className="formOverlay__elm" htmlFor="formOverlay__email">
          <input id="formOverlay__email" className="formOverlay__input" type="email" placeholder="Email" value={formInputData.email} onChange={e => formHandler(e, formData)} />
        </label>
        <EmailError {...props} />
        <label className="formOverlay__elm" htmlFor="formOverlay__userName">
          <input type="text" id="formOverlay__userName" className="formOverlay__input" placeholder="User name" value={formInputData.userName} onChange={e => formHandler(e, formData)} />
        </label>
        <UserError {...props} />
        <label className="formOverlay__elm" htmlFor="formOverlay__pass">
          <input id="formOverlay__pass" className="formOverlay__input" type="password" placeholder="password" />
        </label>
        <button className="cmnBtn cmnBtn--dbl formOverlay__submit">Sign Up</button>
      </form>
    </FormOverlay>
  )
}

export default SingUpForm
