import React from 'react'

const validElm = (e, fn, clearData) => {
  if (e.target.classList.contains('formOverlay') || e.target.classList[0].startsWith('closeBtn')) {
    fn()
    clearData()
  }
}

export default ({ children, formActions, formData }) => (
  <div className="formOverlay loginForm" onClick={e => validElm(e, formActions.closeForm, formData.clearForm)} role="button" tabIndex="0" aria-pressed="false">
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
