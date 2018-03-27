import React from 'react'
import Header from './header'
import stylesheet from '../assets/sass/index.scss'

const RenderHeader = () => <Header />

export default ({ children }) => (
  <div className="container">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <RenderHeader />
    {children}
  </div>
)
