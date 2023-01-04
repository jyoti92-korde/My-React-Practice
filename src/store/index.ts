import {configureStore,combineReducers } from "@reduxjs/toolkit";
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
const middleware: (any)[] =[];
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});
const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
});
export default store;
export type ReduxState = ReturnType<typeof rootReducer>;
export type IStateReduced = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
