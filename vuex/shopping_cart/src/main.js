import { createApp } from "vue";
// import App from "./app-complete/App.vue";
// import store from "./app-complete/store";
import App from "./app-2/App.vue";
import store from "./app-2/store";

createApp(App).use(store).mount("#app");
// createApp(App).mount("#app");
