import { combineReducers } from "redux";
import productReducer from './productsReducer'

const allReducer = combineReducers({
    productReducer
});

export default allReducer;