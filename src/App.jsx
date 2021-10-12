import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList/ProductList";
import ProductPage from "./components/ProductList/ProductPage";
const App = () => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route path={"/productList"} render={() => <ProductList />} />
        <Route path={"/product"} render={() => <ProductPage />} />
        <Redirect to={"/productList"} />
      </Switch>
    </div>
  );
};
export const AppRoot = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
