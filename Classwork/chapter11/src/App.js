import { connect } from "react-redux";
import Cart from "./Cart";

// mapStateToProps subscribes to store updates and returns an object that contains a slice of the store data
// that we wish to make available as props to our component.
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}

// mapDispatchToProps provides our component with access to the action creator functions that can be
// called to dispatch an action to the store

function mapDispatchToProps(dispatch) {
  return {
    // The onAddProduct function dispatches an action with action
    // type “addProduct” and productData object as payload.

    onAddProduct: (productName, productPrice) => dispatch({
      type: "addProduct",
      productData: {
        productName: productName,
        productPrice: productPrice
      }
    }),

    // The onDeleteProduct function similarly dispatches
    // an action with action type “deleteProduct” and productData as payload. Both actions will be handled by
    // the reducer we have created earlier on

    onDeleteProduct: (productData) => dispatch({
      type: "deleteProduct",
      productData: productData
    })
  }
}

// We then connect mapStateToProps and mapDispatchToProps to our Cart component so that it has access to
// totalCost, onAddProduct and onDeleteProduct as props

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
export default connectedComponent;