import { combineReducers } from "redux"; 
import {productReducer, selectProductReducer} from './productReducer';
import {cartReducer} from './cartReducer';

const reducers =  combineReducers({
    allProducts: productReducer,
    product: selectProductReducer,
    listCart: cartReducer
});

export default reducers;