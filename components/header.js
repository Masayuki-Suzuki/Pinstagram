import React from 'react'
import Link from 'next/link'
import {changeString} from '../actions/createActions';

const Header = props => {
  const test = (e) => {
    e.preventDefault()
    return false;
  }
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/img/pinstagram-icon.svg" width="40" height="40" alt="Pinstagram"/>
          </a>
        </Link>
      </div>
      <div className="search">
        <form onSubmit={ test } >
          <input type="text" className="searchBox" placeholder="Search..."/>
        </form>
      </div>
    </header>
  )
}

export default Header;