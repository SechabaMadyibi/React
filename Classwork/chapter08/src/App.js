import './App.css';
import React, { Component } from 'react';
//import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
//import Products from './Products';

class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {

    return (
      <div className="App">
        {/* <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent> */}
        <UserForm></UserForm> 
        
      </div>
    );
  }
}

export default App;

