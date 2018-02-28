import React, { Component } from "react"
import withRedux from "next-redux-wrapper"
import makeStore from "../store/storeCreater"
import { changeString, Foo } from "../actions/createActions"

import stylesheet from '../assets/sass/index.scss'

const sample = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
}

const sampleHeading = {
  fontSize: '3rem',
  lineHeight: 1,
  margin: '0 0 10px',
}

const sampleCopy = {
  fontSize: '2rem',
  margin: '0 0 40px',
}

const sampleSubHeading = {
  fontSize: '1.8rem',
  fontWeight: 500
}

const sampleText = {
  fontSize: '1.6rem'
}


let Page = props => (
  <div style={sample}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
    <h1 style={sampleHeading}>Next.js Boilerplate with Redux.</h1>
    <p className={"commonText"}>This boilerplate is created by Masayuki.</p>
    <h2 style={sampleSubHeading}>Redux Test ( Input text and push submit )</h2>
    <div>
      <input className={"textBox commonText"} type="text" />
      <button
        onClick={() => {
          props.onSubmit();
        }}
      >
        submit
      </button>
    </div>
    <p className={"commonText"}>String Data: {props.stringData}</p>
  </div>
);

Page.getInitialProps = ({ store, isServer, pathname, query }) => {
  store.dispatch(changeString("hogehoge"));
};

const mapStateToProps = state => {
  return { stringData: state.stringData };
};

const mapDispatchToProps = dispatch => {
  const onSubmit = () => {
    const elm = document.getElementsByClassName("textBox")[0];
    dispatch(changeString(elm.value));
  };
  return {
    onSubmit
  };
};

Page = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Page);

export default Page;
