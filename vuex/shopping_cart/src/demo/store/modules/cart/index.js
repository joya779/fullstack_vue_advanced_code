import axios from "axios";

const state = {
   cartItems: []
};
const getters = {
  cartItems: (state) => state.cartItems,
};
const actions = {
  getCartItems({commit}){
    axios.get("/api/cart").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  }
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload
  }
};

const cartModule = {
  state,
  getters,
  actions,
  mutations,
};

export default cartModule;
