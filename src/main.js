import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createPinia } from "pinia";

//引入SweetAlert及其附帶的css
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";

import AllRules from "@vee-validate/rules";

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import en from "@vee-validate/i18n/dist/locale/en.json";

import $httpMessageState from "@/methods/pushMessageState.js";
import { date, currency } from "@/methods/filters.js";

import App from "./App.vue";
import router from "./router";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW, en: en }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale("zhTW");

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$filters = {
  date,
  currency,
};

app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.component("Loading", Loading);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
