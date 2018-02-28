import React, { Component } from "react"
import withRedux from "next-redux-wrapper"
import makeStore from "../store/storeCreater"
import { changeString, Foo } from "../actions/createActions"

import stylesheet from '../assets/sass/index.scss'

let Page = props => (
  <div className={"sample"}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
    <h1 className={"sample__heading"}>Next.js Boilerplate with Redux.</h1>
    <p className={"sample__copy"}>This boilerplate is created by Masayuki.</p>
    <h2 className={"sample__subHeading"}>Redux Test ( Input text and push submit )</h2>
    <div>
      <input className={"textBox commonText"} type="text" />
      <button
        className={"sample__btn"}
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
