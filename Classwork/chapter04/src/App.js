import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
class App extends Component {
 render() {
    const isValid = true;
 return (
 <div>
    {/* <Rating rating="1"/>
 <Rating rating="2"/>
 <Rating rating="3"/>
 <Rating rating="4"/>
 <Rating rating="5"/> */}
 <h1>
 My First React App!
 </h1>
 <Products />
 <Button variant="primary" disabled={!isValid}>Default</Button> 
</div>
 );
 }
}
export default App;

