import React from 'react'
import FormOverlay from './formOverlay'

const LoginForm = ({ closeForm }) => (
  <FormOverlay closeForm={closeForm}>
    <h2 className="formOverlay__heading">Login to see and share photos</h2>
    <form className="formOverlay">
      <label htmlFor="formOverlay__email">
        <input id="formOverlay__email" type="email" placeholder="Email" />
      </label>
      <label htmlFor="formOverlay__pass">
        <input id="formOverlay__pass" type="password" placeholder="password" />
      </label>
      <button>Log in</button>
    </form>
  </FormOverlay>
)

export default LoginForm
