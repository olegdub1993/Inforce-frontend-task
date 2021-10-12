import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Product.module.css";
const Product = ({ data, toggleModalAdd, toggleModalRemove }) => {
  const addHandler = (e) => {
    toggleModalAdd(true);
  };
  const removeHandler = (event) => {
    toggleModalRemove(true);
  };
  return (
    <div className={styles.product} to="/product">
      <h2> {data.title}</h2>
      <div>{data.body}</div>
      <button className={styles.button} onClick={(e) => addHandler(e)}>
        Add
      </button>
      <button onClick={(e) => removeHandler(e)}>Remove</button>
      <NavLink className={styles.productInfoLink} to="/product">
        See more
      </NavLink>
    </div>
  );
};
export default Product;
