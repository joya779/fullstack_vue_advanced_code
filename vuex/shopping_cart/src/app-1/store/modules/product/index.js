import axios from "axios";

const state = {
  productItems: [],
};
// mutate state
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};
const getters = {
  productItems: (state) => state.productItems,
};
const actions = {
  async getProductItems({ commit }) {
    // todo: actions goes here
    try {
      const res = await axios.get("/api/products");
      // console.log("getProductItems", res?.data);
      commit("UPDATE_PRODUCT_ITEMS", res?.data);
    } catch (error) {
      console.log("getProductItems error", error);
    }

    // axios.get("/api/products").then((res) => {
    //   // console.log("getProductItems", res);
    //   commit("UPDATE_PRODUCT_ITEMS", res?.data);
    // });
  },
};

const productModule = {
  state,
  getters,
  actions,
  mutations,
};

export default productModule;
