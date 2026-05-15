import Vue from "vue";
// import App from "./app-2/App.vue";
import App from './demo/App.vue'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");