const SET_PRODUCT_INFO = "SET_PRODUCT_INFO";
const initialstate = {
  product: {},
};
let profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_PRODUCT_INFO:
      debugger;
      return { ...state, product: action.product };
    default:
      return state;
  }
};

export let requestProduct = () => async (dispatch) => {
  let data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  ).json();

  dispatch(setProductInfo(data));
};

export let setProductInfo = (product) => ({ type: SET_PRODUCT_INFO, product });
export default profileReducer;
