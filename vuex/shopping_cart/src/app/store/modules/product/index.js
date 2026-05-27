import axios from "axios";

const state = {
  productItems: [],
};
const getters = {
  productItems: (state) => state.productItems,
};
const actions = {
  getProductItems() {
    // todo: actions goes here
    axios.get("/api/products").then((res) => {
      console.log("getProductItems", res);

      commit("UPDATE_PRODUCT_ITEMS", res?.data);
    });
  },
};
// mutate state
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};

const productModule = {
  state,
  getters,
  actions,
  mutations,
};

export default productModule;
