import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
var destination = document.querySelector("#container");

// First, we create our store with the createStore method that takes in our reducer cartReducer as argument
// We have imported cartReducer in the above import statements and will be implementing that later

var store = createStore(cartReducer);

// We then pass in our store to the Provider component as a prop. The Provider component has to be the
// enveloping outermost component to ensure that every component has access to the Redux store
ReactDOM.render(
 <Provider store={store}>
 <App />
 </Provider>,
 destination
);