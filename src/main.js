import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import App from "./App.vue";

import { messages } from "./langs";

const i18n = createI18n({
  locale: "it",
  fallbackLocale: "eng",
  messages,
});

createApp(App).use(i18n).use(createPinia()).mount("#app");
