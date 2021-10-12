const SET_PRODUCTS_LIST = " users/SET-PRODUCT-LIST";
const TOGGLE_MODAL_ADD = "users/TOGGLE_ADD";
const TOGGLE_MODAL_REMOVE = "users/TOGGLE_REMOVE";
const initialstate = {
  products: [{}],
  modalAdd: false,
  modalRemove: false,
};
let productListReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return { ...state, products: [...action.products] };
    case TOGGLE_MODAL_ADD: {
      return { ...state, modalAdd: action.modal };
    }
    case TOGGLE_MODAL_REMOVE: {
      return { ...state, modalRemove: action.modal };
    }
    default:
      return state;
  }
};

export let setProductsList = (products) => ({
  type: SET_PRODUCTS_LIST,
  products,
});

export let toggleModalAdd = (modal) => ({
  type: TOGGLE_MODAL_ADD,
  modal,
});
export let toggleModalRemove = (modal) => ({
  type: TOGGLE_MODAL_REMOVE,
  modal,
});

export let requestProducts = () => async (dispatch) => {
  let data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  dispatch(setProductsList(data));
};

export default productListReducer;
