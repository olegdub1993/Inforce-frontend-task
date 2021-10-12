import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyApp, { AppContainer, AppRoot } from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRoot />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// let store = {
//   _subscriber() {
//     console.log("no subscribers (observers)");
//   },
//   _state: {
//     firstName: "oleg",
//     secondName: "dub",
//   },
//   getState() {
//     return this.state;
//   },
//   subscribe(observer) {
//     this._subscriber = observer;
//   },
//   setFirstName(value) {
//     this._state.firstName = value;
//     this._subscriber();
//   };
