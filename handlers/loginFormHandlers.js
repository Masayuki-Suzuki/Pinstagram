export const emailInputHandler = (e, formData) => {
  formData.saveEmail(e.target.value)
}

export const userNameInputHandler = (e, formData) => {
  formData.saveUser(e.target.value)
}