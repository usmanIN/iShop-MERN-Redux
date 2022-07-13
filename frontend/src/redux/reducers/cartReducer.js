import ActionTypes from "../constants/action-types";

const initialState = {
    carts:[],
    totalAmount: 0,
}



export function cartReducer( state = initialState, action){
    switch(action.type){
        case ActionTypes.ADD_TO_CART: 
             return {...state, carts:[...state.carts,action.payload]}
        default:
            return state;
    }
}
