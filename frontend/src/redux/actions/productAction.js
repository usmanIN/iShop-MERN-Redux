import ActionTypes from "../constants/action-types";
export function setProduct(product){
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product
    }
}

export function selectProduct(product){
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export function removeSelectedProduct(){
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}