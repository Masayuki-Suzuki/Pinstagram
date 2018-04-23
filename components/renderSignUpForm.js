import branch from 'recompose/branch'
import renderNothing from 'recompose/renderNothing'
import signUpForm from './signUpForm'

const isOpenSignUpForm = (formControl) => {
  if (formControl.isSignUp) {
    return true
  }
  return false
}

const withSignUpFormCheck = branch(
  ({ formControl }) => isOpenSignUpForm(formControl),
  component => component,
  renderNothing,
)

export default withSignUpFormCheck(signUpForm)
