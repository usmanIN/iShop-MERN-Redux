import ActionTypes from "../constants/action-types";

export function addProductFromCart(product){
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}
export function removeProductFromCart(product){
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product
    }
}