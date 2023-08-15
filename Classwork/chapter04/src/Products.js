import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    products;

    constructor(props) {
        super(props);
        this.products = this.getProducts();
    }

    //The function we define now returns a <Product> component with the product data object as input for
//each product
    getProducts() {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.", 
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.", 
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.", 
                rating: 5,
                numOfReviews: 2
            }];
    }

    render() {
        const listProducts = this.products.map((product) => {
            //we have provided productName as key attribute for our list items. Remember that "key" is a
//special string attribute which help React identify which items have changed, are added, or are removed
            return <Product key={product.productName} data={product}/>
        })

        return (
            <div>
                <ul>{listProducts}</ul>
            </div>
        )
    }
}
export default Products;