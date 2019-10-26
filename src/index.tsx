import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import TimeOutApp from "./components/TimeOutApp";
import reducers from "../src/reducers";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// const store = createStore(
//   reducers,
//   {},
//   composeWithDevTools(applyMiddleware(reduxThunk))
// );

ReactDOM.render(
  //   <Provider store={store}>
  <BrowserRouter>
    <TimeOutApp />
  </BrowserRouter>,
  //   </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
