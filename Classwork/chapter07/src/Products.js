import React, { Component } from 'react';
class Products extends Component {

 render() {
 //const products = ["Learning React","Pro React","Beginning React"];
 const products = []
 const listProducts = products.map((product) =>
 <li key={product.toString()}>{product}</li>
 );
 return (
 <div>
    {listProducts.length > 0 ? (
 <ul>{listProducts}</ul>
 ) : (
 <ul>No Products to display</ul>
 )}
 <ul>{listProducts}</ul>
 </div>
 );
 }
}
export default Products;