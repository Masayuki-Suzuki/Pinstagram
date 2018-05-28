import axios from 'axios/index'
import { LOGIN_URL, SIGN_UP_URL } from '../store/defineVariables'

export default async (e, {
  fetchUserActions, formActions, fetchControl, formData, formInputData,
}, isSignUp = false) => {
  // stop default form action
  e.preventDefault()
  e.stopPropagation()
  // get and save data from sing up form.
  const passTag = [...e.target.children].slice(-2, -1)[0]
  const { email, userName } = formInputData
  const pass = passTag.firstChild.value
  const jsonWebToken = sessionStorage.getItem('jwt') || null
  let res
  // hide sign up form
  formActions.closeForm()
  // show loading view
  fetchControl.onFetching()
  if (isSignUp) {
    res = await axios.post(SIGN_UP_URL, { email, userName, pass }).catch((err) => {
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
  } else {
    res = await axios.post(LOGIN_URL, { email, pass, jsonWebToken }).catch((err) => {
      // show error message.
      formActions.failedLogin()
      // hide loading view
      fetchControl.endFetching()
      // show sing up form
      formActions.openLoginForm()
      // dump error message for console
      console.error(err)
      throw new Error(err)
    })
  }
  const { jsonWebToken: jwt, userName: loginUser, id } = res.data
  // save jwt to session storage
  sessionStorage.setItem('jwt', jwt)
  // delay at least 1 sec.
  await new Promise(resolve => setTimeout(resolve, 1000))
  // save id and username to state
  fetchUserActions.succeededFetchUserData(id, loginUser)
  // Clear form
  formData.clearForm()
  // hide loading view
  fetchControl.endFetching()
}
