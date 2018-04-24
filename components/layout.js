import React from 'react'
import Header from './header'
import stylesheet from '../assets/sass/index.scss'

export default (props) => (
  <div className="container">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header {...props}/>
    {props.children}
  </div>
)
