import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import signupReducer from '../signup/reducer';
import loginReducer from '../login/reducer';
import newProductsReducer from '../newArrivals/reducer';
import mostRatedItemsReducer from '../mostRatedItems/reducer';
import productsReducer from '../products/reducer';
import productReducer from '../product/reducer';
import addressReducer from '../address/reducer';
import orderReducer from '../Cart/reducer';

import authReducer from '../auth/authReducer';
import loadingReducer from './loadingReducer';
import productsParamsReducer from './productsParamsReducer';

const createRootReducer = (history) =>
  combineReducers({
    form: formReducer,
    signup: signupReducer,
    login: loginReducer,
    newProducts: newProductsReducer,
    mostRatedProducts: mostRatedItemsReducer,
    products:productsReducer,
    product:productReducer,
    auth:authReducer,
    addressFormState:addressReducer,
    orders: orderReducer,
    productsParams:productsParamsReducer,
    loadingReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
