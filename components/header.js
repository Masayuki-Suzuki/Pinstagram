import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import RightNav from './rightNav'

const Header = (props, {
  userData,
  searchPost,
  openLoginForm,
  openSignUpForm,
  onChangeSearchBox,
}) => {
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
      <div className="rightNav">
        <RightNav {...props} />
      </div>
    </header>
  )
}

export default Header
