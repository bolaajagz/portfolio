import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from '../src/Router/index'


const app = createApp(App);

app.use(Router);
app.mount("#app");

// createApp(App).mount('#app')