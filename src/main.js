import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import App from "./App.vue";

const i18n = createI18n({});

createApp(App).use(i18n).use(createPinia()).mount("#app");
