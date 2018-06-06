import React from 'react'
import FormOverlay from './formOverlay'

export default props => (
  <FormOverlay {...props} addWrapperClass="postForm__container">
    <h2 className="postForm__title">Post new Photo</h2>
    <form action="" className="postForm__main">
      <div className="postForm__wrap">
        <button className="postForm__preview">click to upload from your device.</button>
        <div className="postForm__inputGroup">
          <label htmlFor="postUrl" className="postForm__url">
            <input id="postUrl" type="url" value="" placeholder="Add the URL" />
          </label>
          <label htmlFor="postDesc" className="postForm__desc">
            <textarea id="postDesc" className="postForm__textArea" placeholder="" />
          </label>
          <label htmlFor="postComment" className="postForm__comment">
            <textarea id="postComment" className="postForm__textArea" />
          </label>
        </div>
      </div>
    </form>
  </FormOverlay>
)
