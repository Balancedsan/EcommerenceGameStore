import { combineReducers } from 'redux';

import productsReducer from './products/productsReducer';
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer
});
