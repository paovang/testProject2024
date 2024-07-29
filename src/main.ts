import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createPinia } from "pinia";

const pinia = createPinia();

const tenancy = "pao";
const currentHostname = window.location.hostname;
const expectedHostname = `${tenancy}.localhost`;

if (currentHostname !== expectedHostname) {
  console.log("not...");
  window.location.href = `http://${expectedHostname}:5173/admin/test`;
} else {
  console.log("here...");
  const app = createApp(App);
  app.use(pinia);
  app.use(router);
  app.mount("#app");
}
