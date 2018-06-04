import React from 'react'

const validElm = (e, fn, clearData) => {
  if (e.target.classList.contains('formOverlay') || e.target.classList[0].startsWith('closeBtn')) {
    fn()
    clearData()
  }
}

export default ({ formActions, formData }) => (
  <div className="formOverlay postForm" onClick={e => validElm(e, formActions.closeForm, formData.clearForm)} role="button" tabIndex="0" aria-pressed="false">
    <button className="closeBtn">
      <span className="closeBtn__top" />
      <span className="closeBtn__btm" />
    </button>
    <div className="formOverlay__wrap postForm__container">
      <h2 className="postForm__title">Post new Photo</h2>
      <form action="" className="postForm__main">
        <div className="postForm__wrap">
          <button className="postForm__preview">click to upload from your device.</button>
          <div className="postForm__inputGroup">
            <label htmlFor="postUrl" className="postForm__url">
              <input id="postUrl" type="url" value="" placeholder="Add the URL" />
            </label>
            <label htmlFor="postDesc" className="postForm__desc">
              <textarea id="postDesc" className="postForm__textArea" />
            </label>
            <label htmlFor="postComment" className="postForm__comment">
              <textarea id="postComment" className="postForm__textArea" />
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
)
