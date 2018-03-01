import React from 'react';
import Header from "./header";
import stylesheet from '../assets/sass/index.scss'

export default ({children}) => {
  const RenderHeader = () => {
    return <Header/>
  }
  return (
    <div className={'container'}>
      <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
      <RenderHeader/>
      {children}
    </div>
  )
}
