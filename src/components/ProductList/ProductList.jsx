import { connect } from "react-redux";
import React, { useEffect } from "react";
import Product from "./Product/Product";
import {
  requestProducts,
  toggleModalAdd,
  toggleModalRemove,
} from "../../redux/productList-reducer";
import Modal from "./MyModal/MyModal";
const ProductList = ({
  products,
  requestProducts,
  modalAdd,
  modalRemove,
  toggleModalAdd,
  toggleModalRemove,
}) => {
  useEffect(() => {
    requestProducts();
  }, []);
  return (
    <div>
      {modalAdd && (
        <Modal toggleModal={toggleModalAdd}>
          <div>
            <input type="text" placeholder="size" />
          </div>
          <div>
            <input type="text" placeholder="color" />
          </div>
          <div>
            <input type="text" placeholder="weight" />
          </div>
        </Modal>
      )}
      {modalRemove && (
        <Modal toggleModal={toggleModalRemove}>Are you shure?</Modal>
      )}
      <h1>ProductList</h1>
      {products.map((p) => (
        <Product
          data={p}
          key={p.id}
          toggleModalAdd={toggleModalAdd}
          toggleModalRemove={toggleModalRemove}
        />
      ))}
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    products: state.productsListPage.products,
    modalAdd: state.productsListPage.modalAdd,
    modalRemove: state.productsListPage.modalRemove,
  };
};

export default connect(mapStateToProps, {
  requestProducts,
  toggleModalAdd,
  toggleModalRemove,
})(ProductList);
