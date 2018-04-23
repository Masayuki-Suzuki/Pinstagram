import React from 'react'
import FormOverlay from './formOverlay'

const SingUpForm = ({ closeForm }) => (
  <FormOverlay closeForm={closeForm}>
    <h2 className="formOverlay__heading">Sign up to see photos</h2>
    <p className="formOverlay__lead">Free, unlimited access to content</p>
    <p className="formOverlay__lead">Discover ather accounts you&lsquo;ll love and new idea</p>
    <form className="formOverlay">
      <label htmlFor="formOverlay__email">
        <input id="formOverlay__email" type="email" placeholder="Email" />
      </label>
      <label htmlFor="formOverlay__pass">
        <input id="formOverlay__pass" type="password" placeholder="password" />
      </label>
      <button>Continue</button>
    </form>
  </FormOverlay>
)


export default SingUpForm
