import './App.css';
import React, { Component } from 'react';
//import JumboTronComponent from './JumboTronComponent';
//import UserForm from './UserForm';
//import Products from './Products';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

class App extends Component {
  constructor(){
  super();
  console.log(firebase);
  }
  render() {
  return (
  <div>
  <h1></h1>
  </div>
  );
  }
 }
 export default App;

