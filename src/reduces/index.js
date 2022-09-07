import { combineReducers } from "redux";
import productsReducer from './productsReducer'

const allReducer = combineReducers({
    productsReducer
});

export default allReducer;