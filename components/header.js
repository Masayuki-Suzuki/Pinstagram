import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Header = () => {
  const test = (e) => {
    e.preventDefault()
    return false
  }
  return (
    <header className="header">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
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
            <input type="text" id="searchBox" className="searchBox" placeholder="Search..." />
          </label>
        </form>
      </div>
      {// Make login system with passport on node after
      }
    </header>
  )
}

export default Header
