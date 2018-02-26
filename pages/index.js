import React, { Component } from "react";
import withRedux from "next-redux-wrapper";
import makeStore from "../store/storeCreater";
import { changeString, Foo } from "../actions/createActions";

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
    <style global jsx>{`
      html {
        font-size: 62.5%;
      }
      body {
        color: #333
        font-family: sans-serif;
        margin: 0;
      }
    `}</style>
    <h1 style={sampleHeading}>Next.js Boilerplate with Redux.</h1>
    <p style={sampleCopy}>This boilerplate is created by Masayuki.</p>
    <h2 style={sampleSubHeading}>Redux Test ( Input text and push submit )</h2>
    <div>
      <input className={"textBox"} type="text" style={sampleText} />
      <button
        onClick={() => {
          props.onSubmit();
        }}
      >
        submit
      </button>
    </div>
    <p style={sampleText}>String Data: {props.stringData}</p>
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
