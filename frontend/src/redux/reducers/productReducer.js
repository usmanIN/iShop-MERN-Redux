import ActionTypes from "../constants/action-types";

const  initialState = {  products: []};

export function productReducer(state = initialState , action){
    
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return  {...state, products: action.payload} ;
        default:
            return state;
    }
    
}

export function selectProductReducer(state = {}, action){
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}