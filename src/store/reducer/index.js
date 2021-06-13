import { createStore, combineReducers } from "redux";
import ProductReducer from "./productReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from './CartReducer';
const root=combineReducers({
    ProductReducer,CartReducer
});

const store=createStore(root,devToolsEnhancer());
export default store;