import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestProduct } from "../../redux/product-reducer";

const ProductPage = ({ productItem, requestProduct }) => {
  useEffect(() => {
    requestProduct();
  }, []);
  return (
    <div>
      <h2> {productItem.title}</h2>
      <div>{productItem.body}</div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    productItem: state.productItemPage.product,
  };
};

export default connect(mapStateToProps, {
  requestProduct,
})(ProductPage);
