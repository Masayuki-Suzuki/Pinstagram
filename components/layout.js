import React from 'react'
import Header from './header'
import stylesheet from '../assets/sass/index.scss'

export default ({
  children, userData, searchPost, openLoginForm, openSignUpForm, onChangeSearchBox,
}) => (
  <div className="container">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header
      userData={userData}
      searchPost={searchPost}
      openLoginForm={openLoginForm}
      openSignUpForm={openSignUpForm}
      onChangeSearchBox={onChangeSearchBox}
    />
    {children}
  </div>
)
