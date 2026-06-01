import axios from "axios";

const state = {
  cartItems: [],
};
const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => {
    const res = state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
    return res;
  },
  cartQuantity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
};
const actions = {
  getCartItems({ commit }) {
    axios.get("/api/cart").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post("/api/cart", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },

  removeCartItem({ commit }, cartItem) {
    axios.post("/api/cart/delete", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },

  removeAllCartItems({ commit }) {
    axios.post("/api/cart/delete/all").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

const cartModule = {
  state,
  getters,
  actions,
  mutations,
};

export default cartModule;
