// Reducer
// Reducer
function cartReducer(state, action) {
    if (state === undefined) {
        return {
            // First, we initialize our state to an empty productCart array and totalCost being zero.
            totalCost: 0,
            productCart: []
        };
    }
 // We use a switch statement to handle the two action types (addProduct and deleteProduct) our reducer will
// receive
    switch (action.type) {
// If the action type is addProduct, we increment totalCost by the product price and return a new
// array with the newly added product
        case "addProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
// If the action type is removeProduct, we subtract product price from
// totalCost and return a new array with the target product omitted           
        case "deleteProduct":
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state;
    }
}

export default cartReducer;