import React from 'react'
import FormOverlay from './formOverlay'

export default props => (
  <FormOverlay {...props} addWrapperClass="postForm__container">
    <h2 className="postForm__title">Post new Photo</h2>
    <form action="" className="postForm__main">
      <div className="postForm__wrap">
        <button className="postForm__preview">
          <span className="cameraIcon" />
          Click to upload from your device.
        </button>
        <div className="postForm__inputGroup">
          <label htmlFor="postTitle" className="postForm__elm">
            Title
            <input type="text" id="postTitle" placeholder="Add the title for this photo." />
          </label>
          <label htmlFor="postUrl" className="postForm__elm postForm__url">
            From website
            <input id="postUrl" type="url" value="" placeholder="Add the URL" />
          </label>
          <label htmlFor="postDesc" className="postForm__elm postForm__desc">
            Description
            <textarea id="postDesc" className="postForm__textArea" placeholder="Say more about this photo. *Showing in explorer" rows="5" />
          </label>
        </div>
      </div>
      <div className="postForm__submit">
        <button className="cmnBtn cmnBtn--dbl">submit</button>
      </div>
    </form>
  </FormOverlay>
)
