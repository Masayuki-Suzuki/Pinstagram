import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { showLogInForm } from '../actions/createActions'

const Test = ({ text }) => {
  return (
    (text) ? <p>Input: {text}</p> : null
  )
}

const RenderFormBtn = ({ userData, openLoginForm, dispatch }) => {
  const elm = !userData.userName ? (
    <div className="authBtn__wrap">
      <button className="authBtn__btn signUpBtn">Sign Up</button>
      <button className="authBtn__btn logInBtn" onClick={() => dispatch(showLogInForm(true, 'そ↑こ↓'))} >Log In</button>
    </div>
  ) : (
    <div className="userInfo">
      <p className="user">Welcome! {userData.userName}!</p>
    </div>
  )
  return <div className="auth">{elm}</div>
}

const Header = ({ userData, searchPost, openLoginForm, onChangeSearchBox, dispatch }) => {
  const test = (e) => {
    e.preventDefault()
    return false
  }
  return (
    <header className="header">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <title>Pinstagram</title>
      </Head>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/img/pinstagram-icon.svg" width="40" height="40" alt="Pinstagram" />
          </a>
        </Link>
      </div>
      <div className="search">
        <form onSubmit={test}>
          <label className="searchLable" htmlFor="searchBox">
            <input onChange={e => onChangeSearchBox(e.target.value)} type="text" id="searchBox" className="searchBox" placeholder="Search..." />
          </label>
        </form>
      </div>
      <RenderFormBtn userData={userData} openLoginForm={openLoginForm} dispatch={dispatch} />
      {searchPost.text ? <p>{searchPost.text}</p> : null}
    </header>
  )
}

export default Header
