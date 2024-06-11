import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

// app.config.globalProperties.user;
// app.config.globalProperties.token;
// app.config.globalProperties.userCart;

app.mount("#app");
