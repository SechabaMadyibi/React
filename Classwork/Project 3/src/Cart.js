import React, { Component } from "react";
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

// The cart consists of a simple AddProduct form and a table which lists the added products. We use the
// props sent from the connect HOC we implemented earlier. this.props.onAddProduct,
// this.props.onDeleteProduct(productData) functions are called when the add button and remove buttons are
// clicked respectively

class Cart extends Component {
    render() {
        return (
            <div className="container">

{/* Note that this.props.onAddProduct is passed as a prop addProduct to AddProduct
component. This allows the AddProduct child component to dispatch actions to update application
state directly instead of passing data back up the tree */}

                <AddProduct addProduct={this.props.onAddProduct} />
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                <td onClick={() =>
                                    this.props.onDeleteProduct(productData)}>Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <span>Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
};
export default Cart;