import axios from 'axios/index'
import { LOGIN_URL } from '../store/defineVariables'

export default async (fetchUserActions, fetchControl, formActions, jwt) => {
  const res = await axios.post(LOGIN_URL, { jwt }).catch((err) => {
    fetchControl.endFetching()
    console.log('Json web token was invalid token.')
    // If JSON Web Token was invalid, open login form like the first login.
    formActions.openLoginForm()
    console.error(err)
    throw new Error(err)
  })
  // If server response wasn't error
  const { userName: loginUser, id } = res.data
  // delay at least 1 sec.
  await new Promise(resolve => setTimeout(resolve, 1000))
  // save id and username to state
  fetchUserActions.succeededFetchUserData(id, loginUser)
}
