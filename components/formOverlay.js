import React from 'react'

export default ({ children, formActions }) => (
  <div className="formOverlay loginForm" onClick={e => formActions.closeForm(e)} onKeyPress={e => formActions.closeForm(e)} role="button" tabIndex="0" aria-pressed="false">
    <button className="closeBtn">
      <span className="closeBtn__top" />
      <span className="closeBtn__btm" />
    </button>
    <div className="formOverlay__wrap">
      <div className="formOverlay__logo">
        <img src="/img/pinstagram-icon.svg" alt="Pinstagram" />
      </div>
      {children}
    </div>
  </div>
)
