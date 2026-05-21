// heart of Vuex, where we create the store and export it to be used in our app
import { createStore } from "vuex";
import cartModule from "./modules/cart";
import productModule from "./modules/product";

const store = createStore({
  cartModule,
  productModule,
});

export default store;
