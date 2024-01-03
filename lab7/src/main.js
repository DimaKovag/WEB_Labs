import "./style/main.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import { createApp } from "vue";
import App from "./App.vue";

import VueTheMask from "vue-the-mask";

createApp(App).use(VueTheMask).mount("#app");
