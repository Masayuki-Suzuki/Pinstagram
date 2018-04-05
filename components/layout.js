import React from 'react'
import Header from './header'
import stylesheet from '../assets/sass/index.scss'

const RenderHeader = ({ userData, searchPost, openLoginForm, onChangeSearchBox, dispatch }) => (
  <Header userData={userData} searchPost={searchPost} openLoginForm={openLoginForm} onChangeSearchBox={onChangeSearchBox} dispatch={dispatch} />
)

export default ({
  children, userData, searchPost, openLoginForm, onChangeSearchBox, dispatch
}) => (
  <div className="container">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <RenderHeader
      userData={userData}
      searchPost={searchPost}
      openLoginForm={openLoginForm}
      onChangeSearchBox={onChangeSearchBox}
      dispatch={dispatch}
    />
    {children}
  </div>
)
