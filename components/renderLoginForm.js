import branch from 'recompose/branch'
import renderNothing from 'recompose/renderNothing'
import LoginForm from './loginForm'

const isOpenLoginForm = (formControl) => {
  if (formControl.isLogIn) {
    return true
  }
  return false
}

const withLoginFormCheck = branch(
  ({ formControl }) => isOpenLoginForm(formControl),
  component => component,
  renderNothing,
)

export default withLoginFormCheck(LoginForm)
