import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./product-reducer";
import productListReducer from "./productList-reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
  productsListPage: productListReducer,
  productItemPage: productReducer,
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
